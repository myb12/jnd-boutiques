import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

import authReducer from './auth/authSlice';
import quickViewReducer from "./features/quickView-slice";
import cartReducer from "./features/cart-slice";
import wishlistReducer from "./features/wishlist-slice";
import productDetailsReducer from "./features/product-details";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quickViewReducer,
    cartReducer,
    wishlistReducer,
    productDetailsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;    

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;