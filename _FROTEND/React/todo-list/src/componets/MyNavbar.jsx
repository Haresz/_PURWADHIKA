import React, { Component } from "react";
import { connect } from "react-redux";

class MyNavbar extends Component {
  render() {
    return (
      <div className="d-flex flex-row justify-content-between bg-dark p-3 text-white align-items-center">
        <h5>Todo List App</h5>
        <h5>You have {this.props.todoCount} Todo Item(s)</h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todoCount: state.todo.todoCount,
  };
};

export default connect(mapStateToProps)(MyNavbar);
