import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <div className="my-1 todo-item-container d-flex flex-row justify-content-between align-items-center">
        {this.props.todoData.complete == false ? (
          <>
            {this.props.todoData.activity} ID {this.props.todoData.id}
            <div>
              <button
                onClick={() =>
                  this.props.deleteTodoHandler(this.props.todoData.id)
                }
                className="btn btn-danger"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  this.props.completeHandlers(this.props.todoData.id)
                }
                className="btn btn-success"
              >
                Complete
              </button>
            </div>
          </>
        ) : (
          <>
            {this.props.todoData.activity} ID {this.props.todoData.id}
            <div>
              <button
                onClick={() =>
                  this.props.deleteTodoHandler(this.props.todoData.id)
                }
                className="btn btn-danger"
              >
                Delete
              </button>
              <button
                onClick={() =>
                  this.props.completeHandlers(this.props.todoData.id)
                }
                className="btn btn-success"
                disabled
              >
                Finish
              </button>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default TodoItem;
