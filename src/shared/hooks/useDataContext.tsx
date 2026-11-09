import { createContext, useContext, useState } from 'react';

import { bakeryProductsMock } from '../../modules/product/mocks/products.mock';
import type { CategoryType } from '../types/CategoryType';
import type { ProductType } from '../types/ProductType';

interface DataContext {
  products: ProductType[];
  categories: CategoryType[];
}

interface DataContextProps {
  data: DataContext;
  setData: React.Dispatch<React.SetStateAction<DataContext>>;
}

const DataContext = createContext({} as DataContextProps);

interface DataProviderProps {
  children: React.ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContext>({
    products: bakeryProductsMock,
    categories: [],
  });

  return <DataContext.Provider value={{ data, setData }}>{children}</DataContext.Provider>;
};

export const useDataContext = () => {
  const { data, setData } = useContext(DataContext);

  const setProducts = (products: ProductType[]) => {
    setData((currentData) => ({
      ...currentData,
      products,
    }));
  };

  const setCategories = (categories: CategoryType[]) => {
    setData((currentData) => ({
      ...currentData,
      categories,
    }));
  };

  return {
    products: data?.products || [],
    categories: data?.categories || [],
    setProducts,
    setCategories,
  };
};