import { ERROR_ACCESS_DANIED, ERROR_CONNECTION } from './../../constants/errorsStatus';
import axios from 'axios';
import { MethodsEnum } from '../../constants/enums/methods.enum'; 

export default class ConnectionAPI {
  static async call<T>(url: string, method: MethodsEnum, body?: unknown) {
    switch (method) {
      case MethodsEnum.GET:
        return (await axios.get<T>(url)).data;
      case MethodsEnum.DELETE:
        return (await axios.delete<T>(url)).data;
      case MethodsEnum.POST:
        return (await axios.post<T>(url, body)).data;
      case MethodsEnum.PUT:
        return (await axios.put<T>(url, body)).data;
      case MethodsEnum.PATCH:
        return (await axios.patch<T>(url, body)).data;
      default:
        throw new Error(`Método HTTP não suportado: ${method}`);
    }
  }

  static async connect<T>(url: string, method: MethodsEnum, body?: unknown) {
    try {
      return await ConnectionAPI.call<T>(url, method, body);
    } catch (error: unknown) {
      if (!axios.isAxiosError(error)) {
        throw error;
      }

      switch (error.response?.status) {
        case 401:
        case 403:
          throw new Error(ERROR_ACCESS_DANIED);
        default:
          throw new Error(ERROR_CONNECTION);
      }
    }
  }
}

export const connectionAPIGet = async <T>(url: string) => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.GET);
};

export const connectionAPIDelete = async <T>(url: string) => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.DELETE);
};

export const connectionAPIPost = async <T>(url: string, body: unknown) => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.POST, body);
};

export const connectionAPIPut = async <T>(url: string, body: unknown) => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.PUT, body);
};

export const connectionAPIPatch = async <T>(url: string, body: unknown) => {
  return ConnectionAPI.connect<T>(url, MethodsEnum.PATCH, body);
};
