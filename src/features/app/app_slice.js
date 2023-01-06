import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hamburgerMenu: false,
  notifications: false,
  postPreview: false,
  storyPreview: false,
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
    setPostPreview: (state, action) => {
      state.postPreview = action.payload;
    },
    setStoryPreview: (state, action) => {
      state.storyPreview = action.payload;
    },
  },
});

export const {
  setHamburgerMenu,
  setNotifications,
  setPostPreview,
  setStoryPreview,
} = appReducer.actions;

export default appReducer.reducer;
