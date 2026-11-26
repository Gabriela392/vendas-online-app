import type { RouteObject } from 'react-router-dom';

import User from './screens/User';

export const UserRoutesEnum = {
  USER: '/user',
} as const;

export const userScreens: RouteObject[] = [
  {
    path: UserRoutesEnum.USER,
    element: <User />,
  },
];
