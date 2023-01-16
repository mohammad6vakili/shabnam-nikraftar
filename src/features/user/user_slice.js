import { createSlice } from "@reduxjs/toolkit";
import { userQueue } from "../../utils/util";

const initialState = {
  userQueue: userQueue,
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
