import React, { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  function handleClick() {
    setIsOn(!isOn);
  }

  return (
    <div>
      <p>{isOn ? "ON" : "OFF"}</p>
      <button onClick={handleClick}>Toggle Button</button>
    </div>
  );
}
