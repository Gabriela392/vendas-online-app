import { configureStore } from '@reduxjs/toolkit';

import categoryReducer from './reducers/categoryReducer';
import globalReducer from './reducers/globalReducer';
import productReducer from './reducers/productReducer';
import orderReducer from './reducers/orderReducer';

export const store = configureStore({
  reducer: {
    categoryReducer,
    globalReducer,
    orderReducer,
    productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
