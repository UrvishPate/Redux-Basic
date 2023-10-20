import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { TimeConsumerDelay } from "./Test-apis";
import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });

function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}

export const addTen = createAction("counter/addten", (val) => ({payload: val}));

export const subs = createAction("counter/subs");

export const TimeAddVal = createAsyncThunk(
  "counter/time-add-val",
  async (vals, thunkApi) => {
    try {
      await TimeConsumerDelay({
        method: false, 
        time: 4000
      });
      return vals;
    } catch (error) {
      logToFile('Time Add Val Error: ' + error);
      thunkApi.abort(error);
    }
  }
);