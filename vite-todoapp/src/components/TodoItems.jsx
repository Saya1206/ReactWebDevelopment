import TodoItem from "./TodoItem";

function TodoItems({ todoItems, onDeleteClick }) {
  return (
    <div className="row-container">
      {todoItems.map((items) => (
        <TodoItem
          todoName={items.name}
          todoDate={items.date}
          onDeleteClick={onDeleteClick}
        />
      ))}
    </div>
  );
}

export default TodoItems;
