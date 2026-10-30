import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { connectionAPIPost } from '../functions/connection/connectionAPI';
import { useGlobalContext } from './useGlobalContext';
import { setAuthorizationToken } from '../functions/connection/auth';
import { ProductRoutesEnum } from '../../modules/products/routes';
import { ERROR_INVALID_PASSWORD } from '../constants/errorsStatus';
import type { AuthType } from '../../modules/login/types/AuthType';
import { URL_AUTH } from './urls';


export const useRequests = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setNotification } = useGlobalContext();

  const getRequest = async (url: string) => {
    setLoading(true);
    return await axios({
      method: 'get',
      url: url,
    })
      .then((result) => {
        return result.data;
      })
      .catch(() => {
        alert('Erro');
      });
  };

  const postRequest = async <T>(url: string, body: unknown): Promise<T | undefined> => {
    setLoading(true);

    const returnData = await connectionAPIPost<T>(url, body)
      .then((result) => {
        return result;
      })
      .catch((error: Error) => {
        setNotification(error.message, 'error');
        return undefined;
      });

    setLoading(false);
    return returnData;
  };

  const authRequest = async (body: unknown): Promise<void>=> {
    setLoading(true);

    await connectionAPIPost<AuthType>(URL_AUTH, body)
    .then((result) => {
      setAuthorizationToken(result.accessToken);
      navigate(ProductRoutesEnum.PRODUCT);
    })
    .catch(() => {
      setNotification(ERROR_INVALID_PASSWORD, 'error');
      return undefined;
    })
  }

  return {
    loading,
    authRequest,
    getRequest,
    postRequest,
  };
};