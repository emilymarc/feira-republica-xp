import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import CartReducer from './feature/cartSlice';
import UserReducer from './feature/userSlice';

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
})

export default store;