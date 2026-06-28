import { configureStore  } from "@reduxjs/toolkit";
import userReducer from "./features/post/createSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store.getState()
