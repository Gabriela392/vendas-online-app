import type { RouteObject } from 'react-router-dom'; 

import FirstScreen from './screens/FirstScreen';
import PageNotFound from '../../shared/components/PageNotFound';

export const firstScreenRoutes: RouteObject[] = [
  {
    path: '/',
    element: <FirstScreen />,
    errorElement: <PageNotFound />,
  },
];