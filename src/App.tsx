import { useEffect } from 'react';

import { firstScreenRoutes } from './modules/firstScreen/routes';
import { loginRoutes } from './modules/login/routes';
import { categoryScreens } from './modules/category/routes';
import { URL_USER } from './shared/constants/urls';
import { MethodsEnum } from './shared/enums/methods.enum';
import { verifyLoggedIn } from './shared/functions/connection/auth';
import { useNotification } from './shared/hooks/useNotification';
import { useRequests } from './shared/hooks/useRequests';
import {
  type RouteObject,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { productScreens } from './modules/product/routes';
import { useUser } from './store/reducers/globalReducer/useGlobalReducer';

const routes: RouteObject[] = [...loginRoutes];
const routesLoggedIn: RouteObject[] = [
  ...productScreens,
  ...categoryScreens,
  ...firstScreenRoutes,
].map((route) => ({
  ...route,
  loader: verifyLoggedIn,
  HydrateFallback: () => <div>Carregando...</div>,
}));

const router = createBrowserRouter([...routes, ...routesLoggedIn]);

function App() {
  const { contextHolder } = useNotification();
  const { setUser } = useUser();
  const { request } = useRequests();

  useEffect(() => {
    request(URL_USER, MethodsEnum.GET, setUser);
  }, []);

  return (
    <>
      {contextHolder}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
