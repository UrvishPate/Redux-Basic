import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { addTen, subs, TimeAddVal } from "./redux/counter/action";

export default function App() {
  const { counterValue, error, loading } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h2>{counterValue}</h2>
      <h2>{error}</h2>
      <h2>{!loading ? "Idle" : "Loading"}</h2>
      <button onClick={() => dispatch(addTen())}>Add Ten</button>
      <button onClick={() => dispatch(addTen(30))}>Add Custom</button>
      <button onClick={() => dispatch(subs())}>sub</button>
      <button onClick={() => dispatch(TimeAddVal(25))}>Delay Call</button>
    </div>
  );
}