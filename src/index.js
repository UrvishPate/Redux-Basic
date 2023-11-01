import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import store from "./redux/store";
import { Provider } from "react-redux";
import fs from 'fs';
import App from "./App";
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });
/**
 * Logs a given message to the console and writes it to a file.
 * 
 * @param {string} message - The message to log.
 */
function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}
const rootElement = document.getElementById("root");
if (!rootElement) {
    logToFile('Root element not found');
    throw new Error('Root element not found');
}
let root;
try {
    root = createRoot(rootElement);
} catch (error) {
    logToFile('Error creating root: ' + error);
    throw error;
}
try {
    root.render(
        <StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </StrictMode>
    );
} catch (error) {
    logToFile('Error rendering root: ' + error);
    throw error;
}