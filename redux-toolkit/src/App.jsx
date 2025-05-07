import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./slices/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Redux Toolkit Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        -
      </button>
    </div>
  );
}

export default App;
