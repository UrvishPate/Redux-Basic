import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
/**
 * Creates and exports an action creator for adding ten to a counter.
 * 
 * @function
 * @param {number} val - The current value of the counter.
 * @returns {Object} - An action object with a payload containing the current value of the counter.
 */
export const addTen = createAction("counter/addten", (val) => {
  return {
    payload: val
  };
});
/**
 * Creates and exports an action for subtracting from a counter.
 *
 * @returns {Function} The created action.
 */
export const subs = createAction("counter/subs");
/**
 * An asynchronous thunk action creator that adds a value to the counter after a delay.
 * 
 * @function
 * @async
 * @param {Object} vals - The values to add to the counter.
 * @param {Object} thunkApi - The dispatch function provided by Redux Toolkit.
 * @returns {Promise} - A promise that resolves with the values to add to the counter.
 * @throws {Error} - If there is an error during the delay.
 */
export const TimeAddVal = createAsyncThunk(
  "counter/time-add-val",
  async (vals, thunkApi) => {
    try {
      await TimeConsumerDelay({
        method: false, // set true for fulfilled response and false for rejection
        time: 4000
      });
      return vals;
    } catch (error) {
      console.log({ error });
      thunkApi.abort(error);
    }
  }
);