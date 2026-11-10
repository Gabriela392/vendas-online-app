import { useCallback, useContext } from 'react';

import type { CategoryType } from '../types/CategoryType';
import type { ProductType } from '../types/ProductType';
import { DataContext } from './dataContext';

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  const setProducts = useCallback(
    (products: ProductType[]) => {
      setData((currentData) => ({
        ...currentData,
        products,
      }));
    },
    [setData],
  );

  const setCategories = useCallback(
    (categories: CategoryType[]) => {
      setData((currentData) => ({
        ...currentData,
        categories,
      }));
    },
    [setData],
  );

  return {
    products: data?.products || [],
    categories: data?.categories || [],
    setProducts,
    setCategories,
  };
};
