import React, { useState } from "react";
import SecondComponent from "./SecondComponent";

export default function FirstComponent() {
  const [name, setName] = useState("Vedika");
  const [age, setAge] = useState(23);

  return (
    <div>
      <h2>This is first component</h2>
      <p>{name}</p>
      <p>{age}</p>
      <SecondComponent name={name} age={age} />
    </div>
  );
}
