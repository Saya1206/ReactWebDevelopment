import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div className="row-container">
      {todoItems.map((items) => (
        <TodoItem todoName={items.name} todoDate={items.date} />
      ))}
    </div>
  );
}

export default TodoItems;
