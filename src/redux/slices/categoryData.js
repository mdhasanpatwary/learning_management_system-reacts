import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoryData: null,
};

// Action creators are generated for each case reducer function
export const categoryDataSlice = createSlice({
  name: "category-data",
  initialState,
  reducers: {
    setCategoryData: (state, action) => {
      state.categoryData = action.payload;
    },
  },
});

export const { setCategoryData } = categoryDataSlice.actions;

export default categoryDataSlice.reducer;
