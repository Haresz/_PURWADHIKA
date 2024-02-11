import React from "react";

export default function TodoItemF(props) {
  let deletBtnHandler = () => {
    alert("anda memencat button handler");
  };

  let btnHandler = (type) => {
    alert(`Anda memencat button ${type}`);
  };
  return (
    <div className="my-1 todo-item-container d-flex flex-row justify-content-between align-items-center">
      {props.todoData.activity} ID {props.todoData.id}
      <div>
        <button onClick={deletBtnHandler} className="btn btn-danger">
          Delete
        </button>
        <button
          onClick={() => btnHandler("COMPLETE")}
          className="btn btn-success"
        >
          Complete
        </button>
      </div>
    </div>
  );
}
