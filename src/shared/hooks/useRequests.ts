import { useCallback, useState } from 'react';

import type { AuthType } from '../../modules/login/types/AuthType';

import { URL_AUTH } from '../constants/urls';
import { setAuthorizationToken } from '../functions/connection/auth';
import ConnectionAPI, {
  connectionAPIPost,
  type MethodType,
} from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';
import { ERROR_CONNECTION, ERROR_INVALID_PASSWORD } from '../constants/errorsStatus';

export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const { setNotification, setUser } = useGlobalContext();

  const request = useCallback(
    async <T>(
      url: string,
      method: MethodType,
      saveGlobal?: (object: T) => void,
      body?: unknown,
    ): Promise<T | undefined> => {
      setLoading(true);

      try {
        return await ConnectionAPI.connect<T>(url, method, body).then((result) => {
          if (saveGlobal) {
            saveGlobal(result);
          }
          return result;
        });
      } catch (error) {
        setNotification(
          error instanceof Error ? error.message : ERROR_CONNECTION,
          'error',
        );
        return undefined;
      } finally {
        setLoading(false);
      }
    },
    [setNotification],
  );

  const authRequest = useCallback(
    async (body: unknown): Promise<boolean> => {
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
    },
    [setNotification, setUser],
  );

  return {
    loading,
    authRequest,
    request,
  };
};