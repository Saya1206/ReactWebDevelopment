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

/*
export default function Switch({ userRole }) {
  switch (userRole) {
    case "admin":
      return <p>Welcome, Admin!</p>;

    case "guest":
      return <p>Welcome, Guest!</p>;

    default:
      return <p>Wrong Choice!</p>;
  }
}
  */
