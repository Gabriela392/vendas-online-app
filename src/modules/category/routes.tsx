import type { RouteObject } from 'react-router-dom';

import Category from './';

export const CategoryRoutesEnum = {
  CATEGORY: '/category',
  CATEGORY_INSERT: '/category/insert',
} as const;

export const categoryScreens: RouteObject[] = [
  {
    path: CategoryRoutesEnum.CATEGORY,
    element: <Category />,
  },
];
