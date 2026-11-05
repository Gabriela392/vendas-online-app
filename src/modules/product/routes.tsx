import type { RouteObject } from "react-router-dom";
import Product from "./screens/Products";
import ProductInsert from "./screens/ProductInsert";

export const ProductRoutesEnum = {
  PRODUCT: '/product',
  PRODUCT_INSERT: '/product/insert',
} as const;

export type ProductRoutesEnum = (typeof ProductRoutesEnum)[keyof typeof ProductRoutesEnum];

export const productScreens: RouteObject[] = [
  {
    path: ProductRoutesEnum.PRODUCT,
    element: <Product />,
  },
  {
    path: ProductRoutesEnum.PRODUCT_INSERT,
    element: <ProductInsert />,
  }
];