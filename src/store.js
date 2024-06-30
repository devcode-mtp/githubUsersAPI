import { configureStore } from "@reduxjs/toolkit";
import users from "./features/sliceUsers";

export const store = configureStore({
  reducer: {
    users
  }
})