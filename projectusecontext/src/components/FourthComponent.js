import React from "react";

export default function FourthComponent(props) {
  return (
    <div>
      <h2>This is fourth component</h2>
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
}
