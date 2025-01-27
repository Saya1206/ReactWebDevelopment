import React, { useState } from "react";

export default function ArrayStateForm() {
  const [cityArray, setCityArray] = useState([]);

  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    setCityArray((values) => [...values, city]);
    setCity("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter City"
        />

        <input type="submit" value="Add" />
      </form>

      <div>
        <ul>
          {cityArray.map((city) => (
            <li>{city}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
