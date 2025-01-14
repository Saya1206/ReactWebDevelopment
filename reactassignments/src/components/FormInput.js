import React, { useState } from "react";

/*
export default function FormInput() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleClick() {
    alert(`Name: ${name}, Age: ${age}`);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br />

        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <br />

        <input type="button" value="Click" onClick={handleClick} />
      </form>
    </div>
  );
}
  */

export default function FormInput() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeAge(e) {
    setAge(e.target.value);
  }

  function handleClick(event) {
    event.preventDefault();
    alert(`Name: ${name}, Age: ${age}`);
  }

  return (
    <div>
      <form onSubmit={handleClick}>
        <input type="text" value={name} onChange={handleChangeName} />

        <input type="number" value={age} onChange={handleChangeAge} />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
