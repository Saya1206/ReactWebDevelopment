import React from "react";

export default function Switch({ userRole }) {
  let message = { userRole };

  switch (userRole) {
    case "admin":
      message = <p>Welcome, Admin!</p>;
      break;

    case "guest":
      message = <p>Welcome, Guest!</p>;
      break;

    default:
      return <p>Wrong Choice!</p>;
  }

  return <div>{message}</div>;
}
