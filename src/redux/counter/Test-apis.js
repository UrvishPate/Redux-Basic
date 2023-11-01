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
 * Executes a method after a specified delay and returns a Promise that resolves or rejects based on the method's execution.
 * 
 * @param {Object} param0 - An object containing the method to execute and the delay time.
 * @param {Function} param0.method - The method to execute after the delay.
 * @param {Number} param0.time - The delay time in milliseconds.
 * @returns {Promise} - A Promise that resolves with "success" if the method executes successfully, or rejects with "error" if the method fails.
 */
export function TimeConsumerDelay({ method, time }) {
    return new Promise((res, rej) => {
        try {
            setTimeout(() => {
                if (method) {
                    logToFile("Success: Method executed successfully");
                    res("success");
                } else {
                    logToFile("Error: Method execution failed");
                    rej("error");
                }
            }, time);
        } catch (error) {
            logToFile('Time Consumer Delay Error: ' + error);
            throw error;
        }
    });
}