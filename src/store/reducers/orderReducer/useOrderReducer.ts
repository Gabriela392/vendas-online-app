import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import type { OrderType } from '../../types/OrderType';
import { setOrdersAction, setOrderAction } from '.';

export const useOrderReducer = () => {
  const dispatch = useDispatch();
  const { orders, order } = useAppSelector((state) => state.orderReducer);

  const setOrders = useCallback(
    (orders: OrderType[]) => {
      dispatch(setOrdersAction(orders));
    },
    [dispatch],
  );

  const setOrder = useCallback(
    (order?: OrderType) => {
      dispatch(setOrderAction(order));
    },
    [dispatch],
  );

  return {
    orders,
    setOrders,
    order,
    setOrder,
  };
};
