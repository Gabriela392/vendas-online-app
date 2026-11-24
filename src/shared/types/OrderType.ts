import type { UserType } from '../../modules/login/types/UserType';
import type { AddressType } from './AddressType';
import type { PaymentType } from './PaymentType';
import type { ProductType } from './ProductType';

export interface OrderType {
  id: number;
  date: string;
  userId: number;
  user: UserType;
  amountProducts: number;
  payment?: PaymentType;
  address?: AddressType;
  ordersProduct?: ProductType[];
}
