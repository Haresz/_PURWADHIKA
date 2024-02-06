import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="my-1 todo-item-container d-flex flex-row justify-content-between align-items-center">
        Makan
        <div>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-success">Complete</button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
