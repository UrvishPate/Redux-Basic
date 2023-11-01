import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });
/**
 * Logs a message to the console and writes it to a file.
 * 
 * @param {string} message - The message to be logged.
 */
function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}
/**
 * Creates an action to add ten to the counter.
 *
 * @param {number} val - The current value of the counter.
 * @returns {Object} - An action object with a payload containing the current value of the counter.
 */
export const addTen = createAction("counter/addten", (val) => {
    return {
        payload: val
    };
});
/**
 * Creates and exports an action with type "counter/subs" using the createAction function.
 *
 * @returns {Object} - An action object with the type "counter/subs".
 */
export const subs = createAction("counter/subs");
/**
 * An asynchronous action creator that adds a value to the counter after a delay.
 * It uses the `createAsyncThunk` function from Redux Toolkit to handle the async logic.
 * 
 * @function
 * @async
 * @param {string} "counter/time-add-val" - The action type prefix for this action.
 * @param {function} async function - The payload creator function. It receives the arguments passed to the dispatched action and should return a Promise that resolves to the value we want stored as the resulting action's payload. It may also reject if there was an error.
 * @returns {object} An action object.
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
            logToFile('Time Add Val Error: ' + error)
            thunkApi.abort(error);
        }
    }
);