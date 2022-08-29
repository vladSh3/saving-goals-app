import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "bll/store";

interface IPriceState {
  totalAmount: number;
  goalDate: string;
  dateDiff: number;
}

const initialState: IPriceState = {
  totalAmount: 0,
  goalDate: "",
  dateDiff : 0
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

export const { setTotalAmount, setGoalDate ,setDateDiff } = amountSlice.actions;

export const selectTotalAmount = (state: RootState): number =>
  state.amount.totalAmount;
export const selectGoalDate = (state: RootState): string =>
  state.amount.goalDate;
export const dateDiff = (state: RootState): number =>
  state.amount.dateDiff;

export default amountSlice.reducer;
