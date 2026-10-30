import type { RouteObject } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

export const LoginRouteEnum = {
  LOGIN: '/login',
} as const;

export const loginRoutes: RouteObject[] = [
  {
    path: LoginRouteEnum.LOGIN,
    element: <LoginScreen />,
  },
];