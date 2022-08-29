import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "bll/store";

export interface IPriceState {
  totalAmount: number | null;
  goalDate: string;
  dateDiff: number;
}

const initialState: IPriceState = {
  totalAmount: null,
  goalDate: "",
  dateDiff: 0,
};

export const amountSlice = createSlice({
  name: "amount",
  initialState,
  reducers: {
    setTotalAmount: (state, action) => {
      state.totalAmount = action.payload;
    },
    setGoalDate: (state, action) => {
      state.goalDate = action.payload;
    },
    setDateDiff: (state, action) => {
      state.dateDiff = action.payload;
    },
  },
});

export const { setTotalAmount, setGoalDate, setDateDiff } = amountSlice.actions;

export const selectTotalAmount = (state: RootState): number | null =>
  state.amount.totalAmount;
export const selectGoalDate = (state: RootState): string =>
  state.amount.goalDate;
export const selectDateDiff = (state: RootState): number =>
  state.amount.dateDiff;

export default amountSlice.reducer;
