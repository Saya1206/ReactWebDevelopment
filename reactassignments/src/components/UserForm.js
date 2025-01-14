import React, { useState } from "react";

export default function UserForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }

    if (age <= 0) {
      alert("Please enter a valid age");
      return;
    }

    alert(`Name: ${name}, Age: ${age}`);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <br />

        <label>Enter Age: </label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter your age"
        />

        <br />

        {/* <input type="button" value="Submit"  /> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
