import { useState } from "react";

function AddTodo({ onNewItem }) {
  const [todoname, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDueDate(e.target.value);
  };

  const handleAddButtonClicked = () => {
    onNewItem(todoname, dueDate);
    setTodoName("");
    setDueDate("");
  };

  return (
    <div className="container">
      <div className="row row-container">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter Todo Here"
            value={todoname}
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success btn-container"
            onClick={handleAddButtonClicked}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
