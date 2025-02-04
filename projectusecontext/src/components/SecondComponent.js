import React from "react";
import FirstComponent from "./FirstComponent";
import ThirdComponent from "./ThirdComponent";

export default function SecondComponent({ name, age }) {
  return (
    <div>
      <h2>This is second component</h2>
      <p>{name}</p>
      <p>{age}</p>
      <ThirdComponent name={name} age={age} />
    </div>
  );
}
