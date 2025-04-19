function AddTodo() {
  return (
    <div className="container">
      <div className="row row-container">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success btn-container">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
