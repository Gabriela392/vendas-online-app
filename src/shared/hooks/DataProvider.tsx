import { useState, type ReactNode } from 'react';

import { bakeryProductsMock } from '../../modules/product/mocks/products.mock';
import type { DataContext as DataContextType } from './dataContext';
import { DataContext } from './dataContext';

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataContextType>({
    products: bakeryProductsMock,
    categories: [],
  });

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
