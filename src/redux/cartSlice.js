import { createSlice } from "@reduxjs/toolkit";

export let cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart:localStorage.getItem('CART') ? JSON.parse(localStorage.getItem('CART')) : [],
  },
  reducers: {
    addToCart: (state, reqData) => {
      let { cartObj } = reqData.payload;
      state.cart = [cartObj, ...state.cart]
      localStorage.setItem("CART", JSON.stringify(state.cart))
    },
    deleteCart: (state, reqData) => {
      let {id} = reqData.payload;
      state.cart = state.cart.filter((obj)=> obj.id != id)
      localStorage.setItem('CART', JSON.stringify(state.cart))
    },
    changeQunatity: (state) => {
      state.cart -= 1;
    },
  },
});

export const { addToCart, deleteCart, changeQunatity } = cartSlice.actions;
export default cartSlice.reducer;
