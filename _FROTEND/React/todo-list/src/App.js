import React from "react";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./componets/TodoItem";
import Axios from "axios";

class App extends React.Component {
  state = {
    todoList: [],
    inputTodo: "",
  };

  fetchTodo = () => {
    Axios.get("http://localhost:2000/todo")
      .then((res) => {
        this.setState({ todoList: res.data });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  deleteTodo = (id) => {
    Axios.delete(`http://localhost:2000/todo/${id}`)
      .then(() => {
        alert("Todo deleted");
        this.fetchTodo();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  completeTodo = (id) => {
    Axios.patch(`http://localhost:2000/todo/${id}`, {
      complete: true,
    });
  };

  renderTodolist = () => {
    return this.state.todoList.map((val) => {
      return (
        <TodoItem
          todoData={val}
          completeHandlers={this.completeTodo}
          deleteTodoHandler={this.deleteTodo}
        />
      );
    });
  };

  addTodo = () => {
    Axios.post("http://localhost:2000/todo", {
      activity: this.state.inputTodo,
      complete: false,
    })
      .then(() => {
        alert("Berhasil menambahkan todo");
        this.fetchTodo();
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  inputHandler = (event) => {
    this.setState({ inputTodo: event.target.value });
  };
  render() {
    return (
      <div className="m-5">
        <h1>Todo List</h1>
        <button className="btn btn-info" onClick={this.fetchTodo}>
          Get my Todo List
        </button>
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
