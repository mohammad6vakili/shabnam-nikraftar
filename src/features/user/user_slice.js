import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userQueue: [],
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserQueue: (state, action) => {
      state.userQueue.push(action.payload);
    },
  },
});

export const { setUserQueue } = userReducer.actions;

export default userReducer.reducer;
