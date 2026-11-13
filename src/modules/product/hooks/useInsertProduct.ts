import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { URL_PRODUCT } from '../../../shared/constants/urls';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { ProductRoutesEnum } from '../productRoutes';
import { useAppNotification } from '../../../store/reducers/globalReducer/useGlobalReducer';

type InsertProduct = {
  name: string;
  price: number;
  image: string;
  categoryId?: number;
};

export const useInsertProduct = () => {
  const navigate = useNavigate();
  const { setNotification } = useAppNotification();
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<InsertProduct>({
    name: '',
    price: 0,
    image: '',
  });
  const disabledButton = !(
    product.name &&
    product.categoryId &&
    product.image &&
    product.price > 0
  );

  const onChangeInput = (
    event: React.ChangeEvent<HTMLInputElement>,
    nameObject: string,
    isNumber?: boolean,
  ) => {
    setProduct({
      ...product,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    });
  };

  const handleChangeSelect = (value: string) => {
    setProduct({
      ...product,
      categoryId: Number(value),
    });
  };

  const handleUploadFile = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      setNotification(
        'Arquivo muito grande! Escolha uma imagem de até 5MB.',
        'error',
      );
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      setProduct((current) => ({
        ...current,
        image: base64,
      }));
    };
    reader.onerror = () => {
      setNotification('Erro ao carregar o arquivo de imagem.', 'error');
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = () => {
    setProduct((current) => ({
      ...current,
      image: '',
    }));
  };

  const handleInsertProduct = async () => {
    setLoading(true);
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification('Sucesso!', 'success', 'Produto inserido com sucesso!');
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
    setLoading(false);
  };

  return {
    product,
    loading,
    disabledButton,
    onChangeInput,
    handleInsertProduct,
    handleChangeSelect,
    handleUploadFile,
    handleRemoveImage,
  };
};
