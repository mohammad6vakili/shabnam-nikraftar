import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hamburgerMenu: false,
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setHamburgerMenu: (state, action) => {
      state.hamburgerMenu = action.payload;
    },
  },
});

export const { setHamburgerMenu } = appReducer.actions;

export default appReducer.reducer;
