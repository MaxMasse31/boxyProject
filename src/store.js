import { configureStore } from "@reduxjs/toolkit";
import shadows from "./features/shadow";

export const store = configureStore({
  reducer: {
    shadows,
  },
});
