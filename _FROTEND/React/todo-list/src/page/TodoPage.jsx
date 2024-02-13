import React from "react";
import "../App.css";
import "../style.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "../componets/TodoItem";
import { connect } from "react-redux";
import {
  changeTodoCount,
  fetchTodoGlobal,
  deleteTodoGlobal,
  completeTodoGlobal,
  addTodoGlobal,
} from "../redux/action/todo";

class TodoPage extends React.Component {
  state = {
    todoList: [],
    inputTodo: "",
  };
  renderTodolist = () => {
    return this.props.todoGlobalState.todoList.map((val) => {
      return (
        <TodoItem
          todoData={val}
          completeHandlers={this.props.completeTodoGlobal}
          deleteTodoHandler={this.props.deleteTodoGlobal}
        />
      );
    });
  };

  inputHandler = (event) => {
    this.setState({ inputTodo: event.target.value });
  };

  componentDidMount() {
    this.props.fetchTodoGlobal();
  }
  render() {
    return (
      <div className="m-5">
        {this.renderTodolist()}
        <div>
          <input onChange={this.inputHandler} type="text" className="mx-3" />
          <button
            onClick={() => this.props.addTodoGlobal(this.state.inputTodo)}
            className="btn btn-primary"
          >
            Add Todo
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    testingProps: 0,
    todoGlobalState: state.todo,
  };
};

const mapDispatchToProps = {
  changeTodoCount,
  fetchTodoGlobal,
  deleteTodoGlobal,
  completeTodoGlobal,
  addTodoGlobal,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
