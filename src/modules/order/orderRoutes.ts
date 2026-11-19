export const OrderRoutesEnum = {
  ORDER: '/order',
} as const;

export type OrderRoutesEnum =
  (typeof OrderRoutesEnum)[keyof typeof OrderRoutesEnum];
