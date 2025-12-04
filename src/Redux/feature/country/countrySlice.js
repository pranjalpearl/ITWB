// src/redux/slices/countriesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  states: [],
  tourTypes: [],
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,

  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setStates: (state, action) => {
      state.states = action.payload;
    },
    setTourTypes: (state, action) => {
      state.tourTypes = action.payload;
    },
  },
});

export const { setCountries, setStates } = countriesSlice.actions;

export default countriesSlice.reducer;
