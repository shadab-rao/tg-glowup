import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0, 
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      setCartCount: (state, action) => {
        state.cartCount = action.payload; 
      },
      incrementCartCount: (state) => {
        state.cartCount += 1;
      },
    },
  });

export const { setCartCount, incrementCartCount } = cartSlice.actions;
export default cartSlice.reducer;
