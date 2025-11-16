import { configureStore } from "@reduxjs/toolkit";
import { LayoutSlice } from "./slices/layout";
import filterReducer from "./slices/filters/filterSlice";
import { productsReducer } from "./slices/products";
import { basketReducer } from "./slices/basket";
import { wishlistReducer } from "./slices/wishlist";

export const store = configureStore({
  reducer: {
    [LayoutSlice.name]: LayoutSlice.reducer,
    productsFilters: filterReducer,
    products: productsReducer,
    basket: basketReducer,
    wishlist: wishlistReducer,
  },
});
