import React from "react";

export default function TodoItem({ todo, removeItems }) {
  return (
    <>
      <span>{todo.text} </span>
      <button onClick={() => removeItems(todo.id)}>Remove</button>
    </>
  );
}
