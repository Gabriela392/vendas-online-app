import { useGlobalReducer } from './../../store/reducers/globalReducer/useGlobalReducer';
import { useCallback, useState } from 'react';

import type { AuthType } from '../../modules/login/types/AuthType';
import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, {
  connectionAPIPost,
  type MethodType,
} from '../functions/connection/connectionAPI';
import { ERROR_INVALID_PASSWORD } from '../constants/errorsStatus';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalReducer();

  const request = useCallback(
    async <T>(
      url: string,
      method: MethodType,
      saveGlobal?: (object: T) => void,
      body?: unknown,
    ): Promise<T | undefined> => {
      setLoading(true);

      const returnObject: T | undefined = await ConnectionAPI.connect<T>(
        url,
        method,
        body,
      )
        .then((result) => {
          if (saveGlobal) {
            saveGlobal(result);
          }
          return result;
        })
        .catch((error: Error) => {
          setNotification(error.message, 'error');
          return undefined;
        });

      setLoading(false);

      return returnObject;
    },
    [setNotification],
  );

  const authRequest = async (body: unknown): Promise<boolean> => {
    setLoading(true);

    try {
      const result = await connectionAPIPost<AuthType>(URL_AUTH, body);
      setUser(result.user);
      setAuthorizationToken(result.accessToken);

      return true;
    } catch {
      setNotification(ERROR_INVALID_PASSWORD, 'error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    authRequest,
    request,
  };
};
