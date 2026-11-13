import { redirect } from 'react-router-dom';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import {
  getItemStorage,
  removeItemStorage,
  setItemStorage,
} from './storageProxy';
import { LoginRoutesEnum } from '../../../modules/login/routes';

export const unsetAuthorizationToken = () =>
  removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const verifyLoggedIn = () => {
  const token = getAuthorizationToken();
  if (!token) {
    return redirect(LoginRoutesEnum.LOGIN);
  }
  return null;
};

export const logout = () => {
  unsetAuthorizationToken();
  location.href = '/login';
};
