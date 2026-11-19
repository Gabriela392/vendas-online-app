import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { useAppSelector } from '../../hooks';
import { setOrdersAction } from '.';
import type { OrderType } from '../../types/OrderType';

export const useOrderReducer = () => {
  const dispatch = useDispatch();
  const { orders } = useAppSelector((state) => state.orderReducer);

  const setOrders = useCallback(
    (orders: OrderType[]) => {
      dispatch(setOrdersAction(orders));
    },
    [dispatch],
  );

  return {
    orders,
    setOrders,
  };
};
