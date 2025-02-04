import React, { createContext, useContext } from "react";
import UserContext from "../contexts/UserContext";
import ThirdComponent from "./ThirdComponent";

export default function SecondComponent() {
  const useUser = useContext(UserContext);

  return (
    <div>
      <h2>This is second component</h2>
      <p>{useUser.name}</p>
      <p>{useUser.age}</p>
      <p>{useUser.city}</p>
      <ThirdComponent />
    </div>
  );
}
