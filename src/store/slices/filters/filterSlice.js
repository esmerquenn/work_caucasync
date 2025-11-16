import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedSizes: [],
  selectedBrands: [],
  selectedGenders: [],
};

const filterSlice = createSlice({
  name: 'productsFilters',
  initialState,
  reducers: {
    toggleSize: (state, action) => {
      const size = action.payload;
      if (state.selectedSizes.includes(size)) {
        state.selectedSizes = state.selectedSizes.filter(item => item !== size);
      } else {
        state.selectedSizes.push(size);
        console.log('state', state.selectedSizes);
        
      }
    },
    toggleBrand: (state, action) => {
      const brand = action.payload;
      if (state.selectedBrands.includes(brand)) {
        state.selectedBrands = state.selectedBrands.filter(item => item !== brand);
      } else {
        state.selectedBrands.push(brand);
      }
    },
    toggleGender: (state, action) => {
      const gender = action.payload;
      if (state.selectedGenders.includes(gender)) {
        state.selectedGenders = state.selectedGenders.filter(item => item !== gender);
      } else {
        state.selectedGenders.push(gender);
      }
    },
    // Filter reset (reset all filters)
    resetFilters: (state) => {
      state.selectedSizes = [];
      state.selectedBrands = [];
      state.selectedGenders = [];
    },
  },
});

export const { toggleSize, toggleBrand, toggleGender, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
