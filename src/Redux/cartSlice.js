import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartCount: 0, 
  products:[],
  wishlist: [],
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
      setProducts: (state, action) => {
        state.products = action.payload; 
      },
      setWishlist: (state, action) => {
        state.wishlist = action.payload;
        state.wishlistCount = action.payload.length;
      },
    },
  });

export const { setCartCount, incrementCartCount,setProducts ,setWishlist} = cartSlice.actions;
export default cartSlice.reducer;
