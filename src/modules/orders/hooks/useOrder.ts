import { useEffect } from 'react';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';
import { useRequests } from '../../../shared/hooks/useRequests';
import { URL_ORDER_ALL } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';

export const useOrder = () => {
  const { request } = useRequests();
  const { orders, setOrders } = useOrderReducer();

  useEffect(() => {
    request(URL_ORDER_ALL, MethodsEnum.GET, setOrders);
  }, [request, setOrders]);

  return {
    orders,
  };
};
