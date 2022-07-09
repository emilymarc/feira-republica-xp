import { createSlice } from "@reduxjs/toolkit";
import { toast } from 'react-toastify'

const initialState = {
  Items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart") || '[]') : [],
  totalAmount: 0,
  totalItems: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.Items.findIndex(item => item.code_product === action.payload.code_product);
      if (itemIndex >= 0) {
        state.Items[itemIndex].quantity += 1;
        state.Items[itemIndex].stock_product -= 1;
        toast(`Produto adicionado ao carrinho!`, {
          position: 'top-center'
        })
      } else {
        let newItem = { ...action.payload, quantity: 1 };
        newItem.stock_product -= 1;
        state.Items.push(newItem);
        toast(`Produto adicionado ao carrinho!`, {
          position: 'top-center'
        })
      }
      // state.Items[itemIndex].stock_product -= 1;
      localStorage.setItem('cart', JSON.stringify(state.Items));
    },
    removeItem: (state, action) => {
      const itemIndex = state.Items.findIndex(item => item.code_product === action.payload.code_product);
      if (itemIndex >= 0) {
        state.Items.splice(itemIndex, 1);
      }
      localStorage.setItem('cart', JSON.stringify(state.Items));
    },
    decrementItem: (state, action) => {
      const itemIndex = state.Items.findIndex(item => item.code_product === action.payload.code_product);
      if (state.Items[itemIndex].quantity > 1) {
        state.Items[itemIndex].quantity -= 1;
        state.Items[itemIndex].stock_product += 1;
      } else if (state.Items[itemIndex].quantity === 1) {
        state.Items[itemIndex].stock_product += 1;
        state.Items.splice(itemIndex, 1);

      }
      // state.Items[itemIndex].stock_product += 1;
      localStorage.setItem('cart', JSON.stringify(state.Items));
    },
    getTotal: (state) => {
      let { total, quantity } = state.Items.reduce((cartTotal, totalItems) =>{
        const { quantity, price } = totalItems
        const itemTotal = +price * quantity
        cartTotal.total += itemTotal
        cartTotal.quantity += quantity
        return cartTotal
        }, {
          total: 0,
          quantity: 0,
        })
          state.totalAmount = total
          state.totalItems = quantity
        }
      },
});

export const { addItem, removeItem, decrementItem, getTotal } = cartSlice.actions;

export default cartSlice.reducer;
