import { Select as AntdSelect } from 'antd';
import { useEffect, useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/input';
import InputMoney from '../../../shared/components/inputs/inputMoney/InputMoney';
import Screen from '../../../shared/components/screen/Screen';
import { DisplayFlexJustifyRight } from '../../../shared/components/styles/display.style';
import { LimitedContainer } from '../../../shared/components/styles/limited.styled';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { connectionAPIPost } from '../../../shared/functions/connection/connectionAPI';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import { ProductRoutesEnum } from '../productRoutes';
import { ProductInsertContainer } from '../styles/productInsert.style';

interface ProductInsertType {
  name: string;
  price: number;
  image: string;
  categoryId?: number;
}

const ProductInsert = () => {
  const [product, setProduct] = useState<ProductInsertType>({
    name: '',
    price: 0,
    image: '',
  });
  const { categories, setCategories } = useDataContext();
  const { setNotification } = useGlobalContext();
  const { request } = useRequests();
  const navigate = useNavigate();

  useEffect(() => {
    if (categories.length === 0) {
      request(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, [categories.length, request, setCategories]);

  const handleInsertProduct = async () => {
    await connectionAPIPost(URL_PRODUCT, product)
      .then(() => {
        setNotification('Sucesso!', 'success', 'Produto inserido com sucesso!');
        navigate(ProductRoutesEnum.PRODUCT);
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
      });
  };

  const handleOnClickCancel = () => {
    navigate(ProductRoutesEnum.PRODUCT);
  };

  const onChange = (
    event: ChangeEvent<HTMLInputElement>,
    nameObject: keyof ProductInsertType,
    isNumber?: boolean,
  ) => {
    setProduct((currentProduct) => ({
      ...currentProduct,
      [nameObject]: isNumber ? Number(event.target.value) : event.target.value,
    }));
  };

  const handleChange = (value: string) => {
    setProduct((currentProduct) => ({
      ...currentProduct,
      categoryId: Number(value),
    }));
  };

  return (
    <Screen
      listBreadcrumb={[
        {
          name: 'HOME',
        },
        {
          name: 'PRODUTOS',
          navigateTo: ProductRoutesEnum.PRODUCT,
        },
        {
          name: 'INSERIR PRODUTO',
        },
      ]}
    >
      <ProductInsertContainer>
        <LimitedContainer width={400}>
          <Input
            onChange={(event) => onChange(event, 'name')}
            value={product.name}
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
          />
          <Input
            onChange={(event) => onChange(event, 'image')}
            value={product.image}
            margin="0px 0px 16px 0px"
            title="Url imagem"
            placeholder="Url imagem"
          />
          <InputMoney
            onChange={(event) => onChange(event, 'price', true)}
            value={product.price}
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Preço"
          />
          <div style={{ marginBottom: 32 }}>
            <div style={{ marginBottom: 8 }}>Categoria</div>
            <AntdSelect
              style={{ width: '100%' }}
              onChange={(value) => handleChange(String(value))}
              options={categories.map((category) => ({
                value: `${category.id}`,
                label: category.name,
              }))}
            />
          </div>
          <DisplayFlexJustifyRight>
            <LimitedContainer margin="0px 8px" width={120}>
              <Button danger onClick={handleOnClickCancel}>
                Cancelar
              </Button>
            </LimitedContainer>
            <LimitedContainer width={120}>
              <Button onClick={handleInsertProduct} type="primary">
                Inserir produto
              </Button>
            </LimitedContainer>
          </DisplayFlexJustifyRight>
        </LimitedContainer>
      </ProductInsertContainer>
    </Screen>
  );
};

export default ProductInsert;