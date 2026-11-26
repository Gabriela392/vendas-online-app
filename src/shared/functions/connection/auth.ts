import { redirect, type NavigateFunction } from 'react-router-dom';
import type { UserType } from '../../../modules/login/types/UserType';
import { AUTHORIZATION_KEY } from '../../constants/authorizationConstants';
import { URL_USER } from '../../constants/urls';
import { connectionAPIGet } from './connectionAPI';
import {
  getItemStorage,
  removeItemStorage,
  setItemStorage,
} from './storageProxy';
import { LoginRoutesEnum } from '../../../modules/login/routes';
import type { UserTokenType } from '../../../modules/login/types/UserToken';

export const unsetAuthorizationToken = () =>
  removeItemStorage(AUTHORIZATION_KEY);

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    setItemStorage(AUTHORIZATION_KEY, token);
  }
};

export const getAuthorizationToken = () => getItemStorage(AUTHORIZATION_KEY);

export const getUserInfoByToken = (): UserTokenType | undefined => {
  const token = getAuthorizationToken();
  const tokenSplited = token?.split('.');

  if (tokenSplited && tokenSplited.length > 1) {
    return JSON.parse(window.atob(tokenSplited[1]));
  }

  return undefined;
};

export const verifyLoggedIn = async () => {
  const token = getAuthorizationToken();
  if (!token) {
    return redirect(LoginRoutesEnum.LOGIN);
  }

  return await connectionAPIGet<UserType>(URL_USER)
    .then((user) => {
      if (!user) {
        return redirect(LoginRoutesEnum.LOGIN);
      }
      return null;
    })
    .catch(() => {
      unsetAuthorizationToken();
      return redirect(LoginRoutesEnum.LOGIN);
    });
};

export const logout = (navigate: NavigateFunction) => {
  unsetAuthorizationToken();
  navigate(LoginRoutesEnum.LOGIN);
};
