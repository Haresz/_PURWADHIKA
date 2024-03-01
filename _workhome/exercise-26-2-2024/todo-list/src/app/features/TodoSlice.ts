import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import ITodo from "../Interface/ITodo";
import { v4 as uuidv4 } from "uuid";

const initialState: any = {
  todos: [
    {
      id: "34b5b157-f042-4d0d-80ec-dbde515e1b50",
      title: "halo",
      complate: true,
    },
  ],
};

export const TodoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: uuidv4(),
        title: action.payload,
        complate: false,
      };
      state.todos = [...state.todos, newTodo];
    },
    doneTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex(
        (todo: ITodo) => todo.id === action.payload
      );
      state.todos[index].complate = !state.todos[index].complate;
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      const index = state.todos.findIndex(
        (todo: ITodo) => todo.id === action.payload
      );
      state.todos.splice(index, 1);
    },
  },
});

export const { addTodo, doneTodo, deleteTodo } = TodoSlice.actions;

export default TodoSlice.reducer;
