import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   exitModal: false,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    // setExitModal: (state, action) => {
    //   state.exitModal = action.payload;
    // },
  },
});

export const {
  // setExitModal
} = userReducer.actions;

export default userReducer.reducer;
