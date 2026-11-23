import type { RouteObject } from 'react-router-dom';
import { createElement } from 'react';
import Order from './screens/Order';
import OrderDetail from './screens/OrderDetail';

export const OrderRoutesEnum = {
  ORDER: '/order',
  ORDER_ID: '/order/:orderId',
} as const;

export const orderScreens: RouteObject[] = [
  {
    path: OrderRoutesEnum.ORDER,
    element: createElement(Order),
  },
  {
    path: OrderRoutesEnum.ORDER_ID,
    element: createElement(OrderDetail),
  },
];
