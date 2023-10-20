import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import fs from 'fs';
import App from "./App";

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

const rootElement = document.getElementById("root");
let root;

try {
    root = createRoot(rootElement);
    root.render(
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    );
} catch (error) {
    logToFile('Error: ' + error);
    throw error;
}