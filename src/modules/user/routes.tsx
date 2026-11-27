import type { RouteObject } from 'react-router-dom';
import UserInsert from './screens/UserInsert';
import User from './screens/User';

export const UserRoutesEnum = {
  USER: '/user',
  USER_INSERT: '/user/insert',
} as const;

export const userScreens: RouteObject[] = [
  {
    path: UserRoutesEnum.USER,
    element: <User />,
  },
  {
    path: UserRoutesEnum.USER_INSERT,
    element: <UserInsert />,
  },
];
