import { useState } from "react";

function DemoUseState() {
  const [count, setCount] = useState(0);

  function countMe() {
    setCount(count + 1);
  }

  return (
    <>
      <p>{count}</p>
      <button onClick={countMe}>Counter Button</button>
    </>
  );
}

export default DemoUseState;
