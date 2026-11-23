import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import type { OrderType } from '../../types/OrderType';
import { setOrdersAction } from '.';

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
