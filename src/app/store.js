import { configureStore } from "@reduxjs/toolkit";
import appReducer from "../features/app/app_slice";
import userReducer from "../features/user/user_slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
    user: userReducer,
  },
});
