import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Items: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
  totalAmount: 0,
  numberCart: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemIndex = state.Items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.Items[itemIndex].quantity += 1;
      } else {
        let newItem = { ...action.payload, quantity: 1 };
        state.Items.push(newItem);
      }
      localStorage.setItem('cart', JSON.stringify(state.Items));
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
