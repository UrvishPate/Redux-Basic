import { createReducer } from "@reduxjs/toolkit";
import { addTen, subs, TimeAddVal } from "./action";

const initialState = {
  counterValue: 0,
  error: "",
  loading: false
};

const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTen, (state, action) => {
    state.counterValue += action.payload || 10;
  });

  builder.addCase(subs, (state) => {
    state.counterValue -= 1;
  });

  builder.addCase(TimeAddVal.fulfilled, (state, action) => {
    state.counterValue += action.payload;
    state.loading = false;
  });

  builder.addCase(TimeAddVal.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(TimeAddVal.rejected, (state, action) => {
    state.loading = false;
    state.error = action.error.message;
    state.counterValue = 0;
  });
});

export default counterReducer;