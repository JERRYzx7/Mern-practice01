import { configureStore } from "@reduxjs/toolkit";
import postSlice.reducer from "./postSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
