import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    items: [],
    totalCount: 0,
    totalPrice: 0,
    totalDiscount: 0,
  },
  reducers: {
    recalcTotals(state) {
      state.totalCount = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = state.items.reduce((sum, item) => sum + item.quantity * Number(item.price), 0);
    },
    saveToCookie(state) {
      Cookies.set("basketItems", JSON.stringify(state.items), { expires: 7 });
    },
    addToBasket(state, action) {
      const product = action.payload;
      // ID'yi ürün ID + ml kombinasyonu olarak kullanıyoruz
      const uniqueId = `${product.id}-${product.ml}`;
      const existing = state.items.find((item) => item.id === uniqueId);
      
      if (existing) {
        existing.quantity += product.quantity || 1;
      } else {
        state.items.push({ 
          ...product, 
          id: uniqueId, // Benzersiz ID kullanıyoruz
          quantity: product.quantity || 1 
        });
      }
      basketSlice.caseReducers.recalcTotals(state);
      basketSlice.caseReducers.saveToCookie(state);
    },
    removeFromBasket(state, action) {
      const id = action.payload;
      state.items = state.items.filter((item) => item.id !== id);
      basketSlice.caseReducers.recalcTotals(state);
      basketSlice.caseReducers.saveToCookie(state);
    },
    incrementQuantity(state, action) {
      const { id, amount } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.quantity += amount;
      }
      basketSlice.caseReducers.recalcTotals(state);
      basketSlice.caseReducers.saveToCookie(state);
    },
    decrementQuantity(state, action) {
      const { id, amount } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item && item.quantity > amount) {
        item.quantity -= amount;
      } else if (item) {
        item.quantity = 1;
      }
      basketSlice.caseReducers.recalcTotals(state);
      basketSlice.caseReducers.saveToCookie(state);
    },
    loadFromCookie(state) {
      if (typeof window === "undefined") return;
      const cookieData = Cookies.get("basketItems");
      if (cookieData) {
        try {
          state.items = JSON.parse(cookieData);
          basketSlice.caseReducers.recalcTotals(state);
        } catch (e) {
          state.items = [];
          state.totalCount = 0;
          state.totalPrice = 0;
        }
      }
    },
  },
});

export const { 
  addToBasket, 
  removeFromBasket, 
  incrementQuantity, 
  decrementQuantity, 
  recalcTotals, 
  saveToCookie, 
  loadFromCookie 
} = basketSlice.actions;

export const basketReducer = basketSlice.reducer;