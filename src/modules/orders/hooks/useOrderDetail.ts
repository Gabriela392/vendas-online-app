import { useEffect } from 'react';
import { useRequests } from '../../../shared/hooks/useRequests';
import { URL_ORDER_ID } from '../../../shared/constants/urls';
import { MethodsEnum } from '../../../shared/enums/methods.enum';
import type { OrderType } from '../../../store/types/OrderType';
import { useOrderReducer } from '../../../store/reducers/orderReducer/useOrderReducer';

export const useOrderDetail = (orderId?: string) => {
  const { request, loading } = useRequests();
  const { order, setOrder } = useOrderReducer();

  useEffect(() => {
    if (orderId) {
      request<OrderType>(
        URL_ORDER_ID.replace('{orderId}', orderId),
        MethodsEnum.GET,
        setOrder,
      );
    }
  }, [orderId, request, setOrder]);

  return {
    order,
    loading,
  };
};
