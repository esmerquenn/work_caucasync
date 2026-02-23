import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addToWishlist(state, action) {
      const product = action.payload;
      if (!state.items.some((item) => item.id === product.id)) {
        state.items.push(product);
        state.totalItems = state.items.length;
        wishlistSlice.caseReducers.saveToCookie(state);
      }
    },
    removeFromWishlist(state, action) {
      
      const productId = action.payload;
      state.items = state.items.filter((item) => item.id !== productId);
      state.totalItems = state.items.length;
      wishlistSlice.caseReducers.saveToCookie(state);
    },
    saveToCookie(state) {
      Cookies.set(
        "wishlistItems",
        JSON.stringify({
          items: state.items,
          totalItems: state.totalItems,
        }),
        { expires: 7 }
      );
    },
    loadFromCookie(state) {
      if (typeof window === "undefined") return;
      const cookieData = Cookies.get("wishlistItems");
      if (cookieData) {
        try {
          const parsedData = JSON.parse(cookieData);
          state.items = parsedData.items || [];
          state.totalItems = parsedData.totalItems || 0;
        } catch (e) {
          state.items = [];
          state.totalItems = 0;
        }
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist, loadFromCookie, saveToCookie } = wishlistSlice.actions;

export const wishlistReducer = wishlistSlice.reducer;
