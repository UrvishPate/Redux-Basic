import { createReducer } from "@reduxjs/toolkit";
import { addTen, subs, TimeAddVal } from "./action";
import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });
/**
 * Logs a message to the console and writes it to a file.
 *
 * @param {string} message - The message to log and write.
 */
function logToFile(message) {
    logStream.write(message + "\n");
}
const initialState = {
  counterValue: 0,
  error: "",
  loading: false
};
const counterReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTen, (_, action) => {
    logToFile("Counter Value after addTen: " + action.payload);
  });

  builder.addCase(subs, (state) => {
    logToFile("Counter Value after subs: " + state.counterValue);
  });

  builder.addCase(TimeAddVal.fulfilled, (state, action) => {
    logToFile("Counter Value after TimeAddVal fulfilled: " + action.payload);
  });

  builder.addCase(TimeAddVal.pending, (state) => {
    logToFile("Loading state after TimeAddVal pending: " + state.loading);
  });

  builder.addCase(TimeAddVal.rejected, (state, action) => {
    logToFile("Counter Value and Error after TimeAddVal rejected: " + state.counterValue + ", " + action.error.message);
  });
});
export default counterReducer;