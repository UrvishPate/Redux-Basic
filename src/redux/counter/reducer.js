import { createReducer } from "@reduxjs/toolkit";
import { addTen, subs, TimeAddVal } from "./action";
import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });
/**
 * Logs a message to the console and writes it to a file.
 * 
 * @param {string} message - The message to log.
 */
function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}
const initialState = {
    counterValue: 0,
    error: "",
    loading: false
};
const counterReducer = createReducer(initialState, (builder) => {
    builder.addCase(addTen, (state, action) => {
        try {
            state.counterValue += action.payload || 10;
            logToFile("Counter value increased by " + (action.payload || 10));
        } catch (error) {
            logToFile('Add Ten Error: ' + error);
            throw error;
        }
    });

    builder.addCase(subs, (state) => {
        try {
            state.counterValue -= 1;
            logToFile("Counter value decreased by 1");
        } catch (error) {
            logToFile('Subs Error: ' + error);
            throw error;
        }
    });

    builder.addCase(TimeAddVal.fulfilled, (state, action) => {
        try {
            state.counterValue += action.payload;
            state.loading = false;
            logToFile("TimeAddVal fulfilled. Counter value increased by " + action.payload);
        } catch (error) {
            logToFile('TimeAddVal Fulfilled Error: ' + error);
            throw error;
        }
    });

    builder.addCase(TimeAddVal.pending, (state) => {
        try {
            state.loading = true;
            logToFile("TimeAddVal is pending");
        } catch (error) {
            logToFile('TimeAddVal Pending Error: ' + error);
            throw error;
        }
    });

    builder.addCase(TimeAddVal.rejected, (state, action) => {
        try {
            state.loading = false;
            state.error = action.error.message;
            state.counterValue = 0;
            logToFile("TimeAddVal rejected. Error: " + action.error.message);
        } catch (error) {
            logToFile('TimeAddVal Rejected Error: ' + error);
            throw error;
        }
    });
});
export default counterReducer;