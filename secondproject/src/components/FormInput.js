import React, { useState } from "react";

export default function FormInput() {
  const [name, setName] = useState("");
  const [password, setPassword]=useState("");

  function changeName(e) {
    setName(e.target.value);
  }

  function changePassword(e){
    setPassword(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();  // Prevents the form from refreshing the page
    alert(`Name: ${name}, Password: ${password}`)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>

      <h1>Display Information</h1>
      <label>
        User Name: <input type="text" value={name} onChange={changeName} placeholder="Enter your name"/>
      </label>

      <br />

      <label>
        User Password: <input type="password" value={password} onChange={changePassword} placeholder="Enter your password"/>
      </label>

      <br />

      <button type="submit">Submit</button>

    </form>
    </>
  );
}
