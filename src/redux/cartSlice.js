import { createSlice } from "@reduxjs/toolkit";

export let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, reqData) => {
      let { cartObj } = reqData.payload;
      state.cart = [cartObj, ...state.cart]
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
