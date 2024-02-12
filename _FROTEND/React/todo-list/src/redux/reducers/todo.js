const init_state = {
  todoList: [],
  inputTodo: "",
  todoCount: 0,
};

export default (state = init_state, action) => {
  switch (action.type) {
    case "CHANGE_TODO_COUNT":
      return { ...state, todoCount: action.payload };

    default:
      return state;
  }
};
