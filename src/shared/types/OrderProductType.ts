import type { OrderType } from './OrderType';
import type { ProductType } from './ProductType';

export interface OrderProductType {
  id: number;
  orderId: number;
  productId: number;
  amount: number;
  price: number;
  order?: OrderType;
  product?: ProductType;
}
