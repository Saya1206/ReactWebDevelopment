function TodoItem() {
  let todoName = "Buy Milk ";
  let todoDate = "19/04/2025";

  return (
    <div className="container">
      <div className="row row-container">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger btn-container">
            Delete
          </button>
        </div>
      </div>
      <div className="row row-container">
        <div className="col-6">Go to College</div>
        <div className="col-4">19/04/2025</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger btn-container">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
