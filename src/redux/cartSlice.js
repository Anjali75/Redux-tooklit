import { createSlice } from "@reduxjs/toolkit";

export let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, reqData) => {
      state.cart += 1;
    },
    deleteCart: (state) => {
      state.cart -= 1;
    },
    changeQunatity: (state) => {
      state.cart -= 1;
    },
  },
});

export const { addToCart, deleteCart, changeQunatity } = cartSlice.actions;
export default cartSlice.reducer;
