export const ProductRoutesEnum = {
  PRODUCT: '/product',
  PRODUCT_INSERT: '/product/insert',
} as const;

export type ProductRoutesEnum =
  (typeof ProductRoutesEnum)[keyof typeof ProductRoutesEnum];
