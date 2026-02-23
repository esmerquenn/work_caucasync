import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts(state, action) {
      state.items = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    clearProducts(state) {
      state.items = [];
      state.loading = false;
      state.error = null;
    },
  },
});

export const { setProducts, setLoading, setError, clearProducts } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
