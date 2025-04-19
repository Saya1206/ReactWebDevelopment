import AddTodo from "./components/AddTodo";
import AppName from "./components/AppName";
import TodoItem from "./components/TodoItem";
import "./App.css";

function App() {
  return (
    <>
      <AppName />
      <AddTodo />
      <TodoItem />
    </>
  );
}

export default App;
