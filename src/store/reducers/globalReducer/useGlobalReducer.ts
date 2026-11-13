import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { setNotificationAction, setUserAction } from '.';
import type { UserType } from '../../../modules/login/types/UserType';
import { useAppSelector } from '../../hooks';
import type { NotificationEnum } from '../../types/NotificationType';

export const useUser = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.globalReducer.user);

  const setUser = useCallback(
    (user: UserType) => {
      dispatch(setUserAction(user));
    },
    [dispatch],
  );

  return { user, setUser };
};

export const useAppNotification = () => {
  const dispatch = useDispatch();
  const notification = useAppSelector(
    (state) => state.globalReducer.notification,
  );

  const setNotification = useCallback(
    (message: string, type: NotificationEnum, description?: string) => {
      dispatch(setNotificationAction({ message, type, description }));
    },
    [dispatch],
  );

  return { notification, setNotification };
};
