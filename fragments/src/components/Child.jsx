import React from "react";

export default function Child({ greet }) {
  return (
    <>
      <h2>Child Component</h2>
      <button onClick={() => greet("neha")}>Great Person</button>
    </>
  );
}
