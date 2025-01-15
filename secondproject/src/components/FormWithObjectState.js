import React, { useState } from "react";

export default function FormWithObjectState() {
  const [inputs, setInputs] = useState({});

  function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handlesubmit() {
    alert(JSON.stringify(inputs));
  }

  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input
          type="text"
          name="empName"
          value={inputs.empName}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <br />

        <input
          type="password"
          name="empPass"
          value={inputs.empPass}
          onChange={handleChange}
          placeholder="Enter your password"
        />

        <br />

        <input
          type="number"
          name="empAge"
          value={inputs.empAge}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
