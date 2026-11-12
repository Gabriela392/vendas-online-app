import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setProductsAction } from '.';
import type { ProductType } from '../../../shared/types/ProductType';

export const useProductReducer = () => {
  const dispatch = useDispatch();
  const { products } = useAppSelector((state) => state.productReducer);

  const setProducts = useCallback(
    (products: ProductType[]) => {
      dispatch(setProductsAction(products));
    },
    [dispatch],
  );

  return {
    products,
    setProducts,
  };
};
