const init_state = {
  todoList: [],
  inputTodo: "",
  todoCount: 0,
};

export default (state = init_state, action) => {
  switch (action.type) {
    case "CHANGE_TODO_COUNT":
      return { ...state, todoCount: action.payload };

    case "GET_TODO":
      return { ...state, todoList: action.payload };

    case "DELETE_TODO":
      return {
        ...state,
        todoList: state.todoList.filter((el) => el.id !== action.payload),
      };

    case "COMPLETE_TODO":
      return {
        ...state,
        todoList: state.todoList?.map((el) => {
          if (el.id === action.payload) {
            el.complete = true;
          }
          return el;
        }),
      };
    case "ADD_TODO":
      return { ...state, todoList: [...state.todoList, action.payload] };

    default:
      return state;
  }
};
