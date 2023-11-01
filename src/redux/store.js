import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/reducer";
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
let store;
try {
    store = configureStore({
        reducer: {
            counter: counterReducer
        }
    });
    logToFile("Store configured successfully");
} catch (error) {
    logToFile('Store Configuration Error: ' + error);
    throw error;
}
export default store;