import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";

export const addTen = createAction("counter/addTen");

export const subs = createAction("counter/subs");

export const TimeAddVal = createAsyncThunk(
  "counter/timeAddVal",
  async (vals, { rejectWithValue }) => {
    try {
      await TimeConsumerDelay({
        method: false,
        time: 4000
      });
      return vals;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);