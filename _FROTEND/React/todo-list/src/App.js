import React from "react";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./componets/TodoItem";

class App extends React.Component {
  state = {
    todoList: [
      { activity: "makan", id: 1 },
      { activity: "mandi", id: 2 },
      { activity: "coding", id: 3 },
      { activity: "tidur", id: 4 },
    ],
    inputTodo: "",
  };

  deleteTodo = (id) => {
    this.setState({
      todoList: this.state.todoList.filter((val) => {
        return val.id !== id;
      }),
    });
  };

  renderTodolist = () => {
    return this.state.todoList.map((val) => {
      return <TodoItem todoData={val} deleteTodoHandler={this.deleteTodo} />;
    });
  };

  addTodo = () => {
    this.setState({
      todoList: [
        ...this.state.todoList,
        {
          activity: this.state.inputTodo,
          id: this.state.todoList.length + 1,
        },
      ],
    });
  };

  inputHandler = (event) => {
    this.setState({ inputTodo: event.target.value });
  };
  render() {
    return (
      <div className="m-5">
        <h1>Todo List</h1>
        {this.renderTodolist()}
        <div>
          <input onChange={this.inputHandler} type="text" className="mx-3" />
          <button onClick={this.addTodo} className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

export default App;
