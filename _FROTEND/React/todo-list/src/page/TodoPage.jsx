import React from "react";
import "../App.css";
import "../style.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "../componets/TodoItem";
import Axios from "axios";
import { connect } from "react-redux";

class TodoPage extends React.Component {
  state = {
    todoList: [],
    inputTodo: "",
  };

  fetchTodo = () => {
    Axios.get("http://localhost:2000/todo")
      .then((res) => {
        this.setState({ todoList: res.data });
        this.props.changeTodoCount(res.data.length);
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

  componentDidMount() {
    this.fetchTodo();
  }
  render() {
    return (
      <div className="m-5">
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

const changeTodoCount = (newCount) => {
  return {
    type: "CHANGE_TODO_COUNT",
    payload: newCount,
  };
};

const mapStateToProps = (state) => {
  return {
    testingProps: 0,
    todoGlobalState: state.todo,
  };
};

const mapDispatchToProps = {
  changeTodoCount,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
