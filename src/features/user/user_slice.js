import { createSlice } from "@reduxjs/toolkit";
import { userQueue } from "../../utils/util";

const initialState = {
  userQueue: localStorage.getItem("userQueue")
    ? JSON.parse(localStorage.getItem("userQueue"))
    : [],
  selectedBranch: null,
};

export const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserQueue: (state, action) => {
      let array = [...state.userQueue];
      array.push(action.payload);
      state.userQueue = array;
      localStorage.setItem("userQueue", JSON.stringify(array));
    },
    setSelectedBranch: (state, action) => {
      state.selectedBranch = action.payload;
    },
  },
});

export const { setUserQueue, setSelectedBranch } = userReducer.actions;

export default userReducer.reducer;
