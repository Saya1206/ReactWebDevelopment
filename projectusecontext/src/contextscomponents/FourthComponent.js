import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

export default function FourthComponent() {
  const useUser = useContext(UserContext);
  
  return (
    <div>
      <h2>This is fourth component</h2>
      <p>{useUser.name}</p>
      <p>{useUser.age}</p>
      <p>{useUser.city}</p>
    </div>
  );
}
