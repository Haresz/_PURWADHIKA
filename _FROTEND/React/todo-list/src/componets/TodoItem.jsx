import React from "react";

class TodoItem extends React.Component {
  deletBtnHandler() {
    alert("anda memencat button handler");
  }

  btnHandler(type) {
    alert(`Anda memencat button ${type}`);
  }
  render() {
    return (
      <div className="my-1 todo-item-container d-flex flex-row justify-content-between align-items-center">
        {this.props.todoData.activity} ID {this.props.todoData.id}
        <div>
          <button
            onClick={() => this.props.deleteTodoHandler(this.props.todoData.id)}
            className="btn btn-danger"
          >
            Delete
          </button>
          <button
            onClick={() => this.btnHandler("COMPLETE")}
            className="btn btn-success"
          >
            Complete
          </button>
        </div>
      </div>
    );
  }
}

export default TodoItem;
