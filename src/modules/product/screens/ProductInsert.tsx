import { Select } from 'antd';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../shared/components/buttons/button/Button';
import Input from '../../../shared/components/inputs/Input';
import Screen from '../../../shared/components/screen/Screen';
import { URL_CATEGORY, URL_PRODUCT } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useDataContext } from '../../../shared/hooks/useDataContext';
import { useGlobalContext } from '../../../shared/hooks/useGlobalContext';
import { useRequests } from '../../../shared/hooks/useRequests';
import type { CategoryType } from '../../../shared/types/CategoryType';
import type { ProductType } from '../../../shared/types/ProductType';
import { ProductRoutesEnum } from '../productRoutes';
import { LimitedContainer } from '../styles/ProductInsert.style';

const ProductInsert = () => {
  const { categories, products, setCategories, setProducts } = useDataContext();
  const { loading, request } = useRequests();
  const { setNotification } = useGlobalContext();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [categoryId, setCategoryId] = useState<number>();
  const categoryRequestStarted = useRef(false);

  useEffect(() => {
    if (categories.length === 0 && !categoryRequestStarted.current) {
      categoryRequestStarted.current = true;
      void request<CategoryType[]>(URL_CATEGORY, MethodsEnum.GET, setCategories);
    }
  }, [categories.length, request, setCategories]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (categoryId === undefined) {
      setNotification('Selecione uma categoria.', 'error');
      return;
    }

    const numericPrice = Number(price);
    if (!Number.isFinite(numericPrice) || numericPrice < 0) {
      setNotification('Informe um preço válido.', 'error');
      return;
    }

    const product = await request<ProductType>(URL_PRODUCT, MethodsEnum.POST, undefined, {
      name: name.trim(),
      image: image.trim(),
      price: numericPrice,
      categoryId,
    });

    if (product) {
      setProducts([...products, product]);
      navigate(ProductRoutesEnum.PRODUCT);
    }
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
      <LimitedContainer>
        <form onSubmit={handleSubmit}>
          <Input
            margin="0px 0px 16px 0px"
            title="Nome"
            placeholder="Nome"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <Input
            margin="0px 0px 16px 0px"
            title="Url imagem"
            placeholder="Url imagem"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            required
          />
          <Input
            margin="0px 0px 16px 0px"
            title="Preço"
            placeholder="Preço"
            type="number"
            min="0"
            step="any"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            required
          />
          <Select
            placeholder="Selecione uma categoria"
            value={categoryId}
            style={{ width: '100%', marginBottom: 16 }}
            onChange={(value: number) => setCategoryId(value)}
            options={categories.map((category) => ({
              value: category.id,
              label: category.name,
            }))}
          />
          <Button loading={loading} type="primary" htmlType="submit">
            Inserir produto
          </Button>
        </form>
      </LimitedContainer>
    </Screen>
  );
};

export default ProductInsert;