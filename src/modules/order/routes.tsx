import type { RouteObject } from 'react-router-dom';

import Order from './screens/Order';
import { OrderRoutesEnum } from './orderRoutes';

export const orderScreens: RouteObject[] = [
  {
    path: OrderRoutesEnum.ORDER,
    element: <Order />,
  },
];
