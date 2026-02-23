import { configureStore } from "@reduxjs/toolkit";
import { LayoutSlice } from "./slices/layout";
import { basketReducer } from "./slices/basket";
import { wishlistReducer } from "./slices/wishlist";
import { productsReducer } from "./slices/products";
import filterReducer from "./slices/filters/filterSlice";

export const store = configureStore({
  reducer: {
    [LayoutSlice.name]: LayoutSlice.reducer,
    basket: basketReducer,
    wishlist: wishlistReducer,
    products: productsReducer,
    productsFilters: filterReducer,
  },
});
