import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../hooks';
import type { UserType } from '../../../modules/login/types/UserType';
import { setUserAction } from '.';

export const useUserReducer = () => {
  const dispatch = useDispatch();
  const { users } = useAppSelector((state) => state.userReducer);

  const setUsers = useCallback(
    (users: UserType[]) => {
      dispatch(setUserAction(users));
    },
    [dispatch],
  );

  return {
    users,
    setUsers,
  };
};
