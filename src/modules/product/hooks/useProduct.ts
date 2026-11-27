import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import { useRequests } from '../../../shared/hooks/useRequests';
import { useProductReducer } from '../../../store/reducers/productReducer/useProductReducer';
import { URL_PRODUCT, URL_PRODUCT_ID } from '../../../shared/constants/urls';
import type { ProductType } from '../../../shared/types/ProductType';
import { ProductRoutesEnum } from '../productRoutes';

export const useProduct = () => {
  const { products, setProducts } = useProductReducer();
  const [searchTerm, setSearchTerm] = useState('');
  const { request } = useRequests();
  const navigate = useNavigate();

  const normalizedSearchTerm = searchTerm.trim().toLocaleLowerCase();
  const productsFiltered = products.filter((product) =>
    product.name.toLocaleLowerCase().includes(normalizedSearchTerm),
  );

  useEffect(() => {
    void request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
  }, [request, setProducts]);

  const handleOnClickInsert = () => {
    navigate(ProductRoutesEnum.PRODUCT_INSERT);
  };

  const onSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleDeleteProduct = useCallback(
    async (productId: number) => {
      await request(URL_PRODUCT_ID(`${productId}`), MethodsEnum.DELETE);
      await request<ProductType[]>(URL_PRODUCT, MethodsEnum.GET, setProducts);
    },
    [request, setProducts],
  );

  return {
    productsFiltered,
    handleOnClickInsert,
    onSearch,
    handleDeleteProduct,
  };
};
