import { Stack } from "@chakra-ui/react";
import Form from "../component/Form";
import Todo from "../component/Todo";
import { useEffect, useState } from "react";
import ITodos from "../interface/ITodo";

export default function TodoPage() {
  const [TodoList, setTodoList] = useState([]);

  useEffect(() => {
    let storage: any = localStorage.getItem("TODOS");
    if (storage) {
      storage = JSON.parse(storage);
      setTodoList(storage);
    }
  }, []);
  return (
    <Stack
      spacing={8}
      className="flex flex-col justify-center items-center m-10"
      border="1px"
      borderColor="gray.200"
    >
      <h1 className="font-bold text-xl mt-4">My Todo</h1>
      {TodoList.map((todo: ITodos) => (
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
