import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";
import TodoItems from "./components/TodoItems";

function App() {
  let todoItems = [
    {
      name: "Buy Milk",
      date: "20/04/2025",
    },
    {
      name: "Go to College",
      date: "20/04/2025",
    },
  ];
  return (
    <>
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems} />
    </>
  );
}

export default App;
