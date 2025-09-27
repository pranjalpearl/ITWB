import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tours: [],
};

const toursSlice = createSlice({
  name: "tours",
  initialState,

  reducers: {
    setTours: (state, action) => {
      state.tours = action.payload;
    },
  },
});

export const { setTours } = toursSlice.actions;

export default toursSlice.reducer;
