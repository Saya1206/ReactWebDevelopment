import React from "react";
import FourthComponent from "./FourthComponent";

export default function ThirdComponent(props) {
  return (
    <div>
      <h2>This is third component</h2>
      <p>{props.name}</p>
      <p>{props.age}</p>
      <FourthComponent name={props.name} age={props.age} />
    </div>
  );
}
