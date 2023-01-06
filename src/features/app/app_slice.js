import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hamburgerMenu: false,
  notifications: false,
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setHamburgerMenu: (state, action) => {
      state.hamburgerMenu = action.payload;
    },
    setNotifications: (state, action) => {
      state.notifications = action.payload;
    },
  },
});

export const { setHamburgerMenu, setNotifications } = appReducer.actions;

export default appReducer.reducer;
