import { useState } from "react";

function Counter({ step }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + step);
  };

  const decrement = () => {
    setCount(count - step);
  };

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment {step}</button>
      <button onClick={decrement}>Decrement {step}</button>
    </>
  );
}

export default Counter;
