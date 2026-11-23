import type { UserType } from '../../modules/login/types/UserType';

export interface AddressType {
  id: number;
  complement: string;
  numberAddress: number;
  cep: string;
  city?: {
    id: number;
    name: string;
    state?: {
      id: number;
      name: string;
    };
  };
}

export interface PaymentType {
  id: number;
  statusId: number;
  price: number;
  discount: number;
  finalPrice: number;
  type: string;
  paymentStatus?: {
    id: number;
    name: string;
  };
}

export interface OrderProductType {
  id: number;
  orderId: number;
  productId: number;
  amount: number;
  price: number;
  product?: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

export interface OrderType {
  id: number;
  date: string;
  userId: number;
  addressId?: number;
  paymentId?: number;
  user?: UserType;
  address?: AddressType;
  payment?: PaymentType;
  ordersProduct?: OrderProductType[];
  amountProducts?: number;
}
