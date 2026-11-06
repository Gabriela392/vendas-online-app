import type { RouteObject } from "react-router-dom";
import Product from "./screens/Products";
import ProductInsert from "./screens/ProductInsert";
import { ProductRoutesEnum } from "./productRoutes";

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