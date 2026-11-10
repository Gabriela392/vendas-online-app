import { createContext, type Dispatch, type SetStateAction } from 'react';

import type { CategoryType } from '../types/CategoryType';
import type { ProductType } from '../types/ProductType';

export interface DataContext {
  products: ProductType[];
  categories: CategoryType[];
}

export interface DataContextProps {
  data: DataContext;
  setData: Dispatch<SetStateAction<DataContext>>;
}

export const DataContext = createContext({} as DataContextProps);
