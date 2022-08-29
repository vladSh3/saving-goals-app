import { configureStore } from "@reduxjs/toolkit";
import { amount } from "bll/slices";

export const store = configureStore({
  reducer: { amount },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
