import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addTen, subs, TimeAddVal } from "./redux/counter/action";
import fs from 'fs';
let logStream = fs.createWriteStream("./debug.log", { flags: 'a' });
/**
 * Logs a message to the console and writes it to a log file.
 * 
 * @param {string} message - The message to be logged.
 */
function logToFile(message) {
    console.log(message);
    logStream.write(message + "\n");
}
/**
 * The main App component of the application.
 * It displays a set of buttons that dispatch actions to modify the counter value.
 * It also displays the current counter value, and the loading and error states.
 * 
 * @returns {JSX.Element} The rendered App component.
 * @throws Will throw an error if there is an error during rendering.
 */
export default function App() {
    try {
        const numval = useSelector((state) => state.counter.counterValue);
        const AsynObj = useSelector((state) => state.counter);
        const dispatch = useDispatch();

        return (
            <div className="App">
                <h1>Hello CodeSandbox</h1>
                <h2>Start editing to see some magic happen!</h2>
                <h2>{numval}</h2>
                <h2>{AsynObj.error}</h2>
                <h2>{!AsynObj.loading ? "Idle" : "Loading"}</h2>
                <button
                    onClick={() => {
                        dispatch(addTen());
                    }}
                >
                    Add Ten
                </button>
                <button
                    onClick={() => {
                        dispatch(addTen(30));
                    }}
                >
                    Add Custom
                </button>
                <button
                    onClick={() => {
                        dispatch(subs());
                    }}
                >
                    sub
                </button>
                <button
                    onClick={() => {
                        dispatch(TimeAddVal(25));
                    }}
                >
                    Delay Call
                </button>
            </div>
        );
    } catch (error) {
        logToFile('App Error: ' + error)
        throw error;
    }
}