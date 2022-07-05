import { configureStore } from '@reduxjs/toolkit'
import CartReducer from './feature/cartSlice';

const store = configureStore({
  reducer: {
    cart: CartReducer,
  },
})

export default store;