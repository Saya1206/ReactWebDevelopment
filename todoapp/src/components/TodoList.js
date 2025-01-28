import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function addTodo() {
    const newTodo = { id: Math.random(), text: inputValue };
    setTodos((values) => [...values, newTodo]);

    setInputValue("");
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <form>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Items"
        />

        <input type="button" value="Add" onClick={addTodo} />
      </form>

      <div>
        <ul>
          {todos.map((t) => (
            <li>
              <TodoItem key={t.id} todo={t} removeItems={removeTodo} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
