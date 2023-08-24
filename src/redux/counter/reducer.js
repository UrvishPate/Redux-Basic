import { createReducer } from "@reduxjs/toolkit";
import { addTen, subs, TimeAddVal } from "./action";

const initialState = {
  counterValue: 0,
  error: "",
  loading: false
};

const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTen, (state, action) => {
      state.counterValue += action.payload || 10;
    })
    .addCase(subs, (state) => {
      state.counterValue -= 1;
    })
    .addCase(TimeAddVal.fulfilled, (state, action) => {
      state.counterValue += action.payload;
      state.loading = false;
    })
    .addCase(TimeAddVal.pending, (state) => {
      state.loading = true;
    })
    .addCase(TimeAddVal.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.counterValue = 0;
    });
});

export default counterReducer;