import type { RouteObject } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';

export const LoginRoutesEnum = {
  LOGIN: '/login',
} as const;

export type LoginRoutesEnum = (typeof LoginRoutesEnum)[keyof typeof LoginRoutesEnum];

export const loginRoutes: RouteObject[] = [
  {
    path: LoginRoutesEnum.LOGIN,
    element: <LoginScreen />,
  },
];