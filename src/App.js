import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addTen, subs, TimeAddVal } from "./redux/counter/action";
/**
 * Represents the main application component.
 * 
 * This component retrieves state values from the Redux store, dispatches actions to the store,
 * and renders the application UI.
 * 
 * @returns {JSX.Element} The rendered App component.
 */
export default function App() {
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
}