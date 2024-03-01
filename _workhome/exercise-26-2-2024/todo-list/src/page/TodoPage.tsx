import { Stack } from "@chakra-ui/react";
import Form from "../component/Form";
import Todo from "../component/Todo";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ITodos from "../interface/ITodo";
import { RootState } from "../app/store";

export default function TodoPage() {
  const [TodoList, setTodoList] = useState([]);
  const Todos = useSelector((state: RootState) => state.todo.todos);

  useEffect(() => {
    let storage: any = localStorage.getItem("TODOS");
    if (storage) {
      storage = JSON.parse(storage);
      setTodoList(Todos);
    }
  });

  return (
    <Stack
      spacing={8}
      className="flex flex-col justify-center items-center m-10"
      border="1px"
      borderColor="gray.200"
    >
      <h1 className="font-bold text-xl mt-4">My Todo</h1>
      {TodoList?.map((todo: ITodos) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          done={todo.complate}
        />
      ))}
      <Form />
    </Stack>
  );
}
