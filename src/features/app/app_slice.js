import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   exitModal: false,
};

export const appReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    // setExitModal: (state, action) => {
    //   state.exitModal = action.payload;
    // },
  },
});

export const {
  // setExitModal
} = appReducer.actions;

export default appReducer.reducer;
