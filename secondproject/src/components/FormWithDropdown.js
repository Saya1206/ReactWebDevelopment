import React, { useState } from "react";

export default function FormWithDropdown() {
  const [country, setCountry] = useState("");

  function handleChange(e) {
    setCountry(e.target.value);
  }

  return (
    <div className="my-3">
      <form>
        <select value={country} onChange={handleChange}>
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="US">US</option>
          <option value="UK">UK</option>
          <option value="Germany">Germany</option>
          <option value="Japan">Japan</option>
          <option value="Canada">Canada</option>
          <option value="Australia">Australia</option>
        </select>

        {country && (
          <p>
            <strong>You selected:</strong> {country}
          </p>
        )}
      </form>
    </div>
  );
}
