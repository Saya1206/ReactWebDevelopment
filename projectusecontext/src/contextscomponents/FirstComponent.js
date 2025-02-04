import React, { useState } from "react";
import UserContext from "../contexts/UserContext";
import SecondComponent from "./SecondComponent";

export default function FirstComponent() {
  const [user, setUser] = useState({
    name: "vedika",
    age: 23,
    city: "kolhapur",
  });

  return (
    <UserContext.Provider value={user}>
      <div>
        <h2>This is first component</h2>
        <SecondComponent />
      </div>
    </UserContext.Provider>
  );
}
