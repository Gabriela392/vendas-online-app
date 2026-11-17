import { act, renderHook, waitFor } from '@testing-library/react';
import { useNavigate } from 'react-router-dom';
import { URL_PRODUCT } from '../../../shared/constants/urls';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useAppNotification } from '../../../store/reducers/globalReducer/useGlobalReducer';
import { ProductRoutesEnum } from '../productRoutes';
import { useInsertProduct } from './useInsertProduct';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../../shared/functions/connection/connectionAPI', () => ({
  connectionAPIPost: jest.fn(),
}));

jest.mock('../../../store/reducers/globalReducer/useGlobalReducer', () => ({
  useAppNotification: jest.fn(),
}));

const mockNavigate = jest.fn();
const mockSetNotification = jest.fn();

beforeEach(() => {
  jest.clearAllMocks();
  jest.mocked(useNavigate).mockReturnValue(mockNavigate);
  jest.mocked(useAppNotification).mockReturnValue({
    notification: undefined,
    setNotification: mockSetNotification,
  });
  jest.mocked(connectionAPIPost).mockResolvedValue(undefined);
});

describe('useInsertProduct', () => {
  it('returns the initial product state', () => {
    const { result } = renderHook(() => useInsertProduct());

    expect(result.current.product).toEqual({
      name: '',
      price: 0,
      image: '',
    });
    expect(result.current.loading).toBe(false);
    expect(result.current.disabledButton).toBe(true);
  });

  it('updates text, numeric, and category fields', () => {
    const { result } = renderHook(() => useInsertProduct());

    act(() => {
      result.current.onChangeInput(
        {
          target: { value: 'Cafeteira' },
        } as React.ChangeEvent<HTMLInputElement>,
        'name',
      );
    });
    act(() => {
      result.current.onChangeInput(
        { target: { value: '125.5' } } as React.ChangeEvent<HTMLInputElement>,
        'price',
        true,
      );
    });
    act(() => {
      result.current.handleChangeSelect('7');
    });

    expect(result.current.product).toEqual({
      name: 'Cafeteira',
      price: 125.5,
      image: '',
      categoryId: 7,
    });
  });

  it('rejects image files larger than 5 MB', () => {
    const { result } = renderHook(() => useInsertProduct());
    const file = new File([new Uint8Array(5 * 1024 * 1024 + 1)], 'large.png', {
      type: 'image/png',
    });

    act(() => {
      result.current.handleUploadFile(file);
    });

    expect(mockSetNotification).toHaveBeenCalledWith(
      'Arquivo muito grande! Escolha uma imagem de até 5MB.',
      'error',
    );
    expect(result.current.product.image).toBe('');
  });

  it('uploads and removes an image', async () => {
    const { result } = renderHook(() => useInsertProduct());
    const file = new File(['image'], 'photo.png', { type: 'image/png' });

    act(() => {
      result.current.handleUploadFile(file);
    });

    await waitFor(() => {
      expect(result.current.product.image).toMatch(/^data:image\/png;base64,/);
    });

    act(() => {
      result.current.handleRemoveImage();
    });

    expect(result.current.product.image).toBe('');
  });

  it('submits the product and navigates after a successful request', async () => {
    const { result } = renderHook(() => useInsertProduct());

    await act(async () => {
      await result.current.handleInsertProduct();
    });

    expect(connectionAPIPost).toHaveBeenCalledWith(URL_PRODUCT, {
      name: '',
      price: 0,
      image: '',
    });
    expect(mockSetNotification).toHaveBeenCalledWith(
      'Sucesso!',
      'success',
      'Produto inserido com sucesso!',
    );
    expect(mockNavigate).toHaveBeenCalledWith(ProductRoutesEnum.PRODUCT);
    expect(result.current.loading).toBe(false);
  });

  it('shows an error notification when submission fails', async () => {
    jest.mocked(connectionAPIPost).mockRejectedValue(new Error('Falha na API'));
    const { result } = renderHook(() => useInsertProduct());

    await act(async () => {
      await result.current.handleInsertProduct();
    });

    expect(mockSetNotification).toHaveBeenCalledWith('Falha na API', 'error');
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(result.current.loading).toBe(false);
  });
});
