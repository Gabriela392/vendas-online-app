import type { RouteObject } from "react-router-dom";
import Product from "./screens/Products";

export const ProductRoutesEnum = {
  PRODUCT: '/product',
} as const;

export type ProductRoutesEnum = (typeof ProductRoutesEnum)[keyof typeof ProductRoutesEnum];

export const productScreens: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <Product />,
  },
];