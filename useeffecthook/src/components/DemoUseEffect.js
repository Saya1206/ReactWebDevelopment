import React, { useEffect, useState } from "react";

/*
//1. Basic useEffect - Component Mounting

export default function DemoUseEffect() {
  useEffect(() => {
    console.log("Mounting Component");
  }, []);

  return (
    <>
      <h1>Hello World!</h1>
    </>
  );
}
  */

/*
//2. useEffect with Cleanup Function

export default function DemoUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounting Component");
    return () => {
      console.log("Clean Up and Unmounting");
    };
  }, [count]);

  return (
    <>
      <h1>Hello World : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
  */

/*
//3. useEffect with Cleanup (Runs Only on Unmount)

export default function DemoUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounting Component");
    return () => {
      console.log("Clean up and Unmounting");
    };
  }, []);

  return (
    <div>
      <h1>Hello World: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Incremen</button>
    </div>
  );
}
  */

//4. useEffect - Runs on State Update

export default function DemoUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Count is: ${count}`);
  }, [count]);

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}
