import { Stack } from "@chakra-ui/react";
import Form from "../component/Form";
import Todo from "../component/Todo";
import { useState } from "react";

export default function TodoPage() {
  const [TodoList, setTodoList] = useState([]);
  return (
    <Stack
      spacing={8}
      className="flex flex-col justify-center items-center m-10"
      border="1px"
      borderColor="gray.200"
    >
      <h1 className="font-bold text-xl mt-4">My Todo</h1>
      <Todo />
      <Form />
    </Stack>
  );
}
