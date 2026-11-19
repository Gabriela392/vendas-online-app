import type { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import Order from './screens/Order';

export const OrderRoutesEnum = {
  ORDER: '/order',
} as const;

export const orderScreens: RouteObject[] = [
  {
    path: OrderRoutesEnum.ORDER,
    element: createElement(Order),
  },
];
