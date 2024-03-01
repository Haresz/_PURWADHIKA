import { Stack, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import ITodos from "../interface/ITodo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../app/features/TodoSlice";
import { RootState } from "../app/store";

export default function Form() {
  const [title, seTitle] = useState("");

  const Todos = useSelector((state: RootState) => state.todo.todos);
  const dispact = useDispatch();
  let todoDone = Todos.filter((todo: ITodos) => todo.complate === true);

  return (
    <footer className="w-full">
      <hr />
      <Stack margin={4}>
        <Text fontWeight={"bold"}> Add Todo </Text>
        <Text>Done : {todoDone.length}</Text>
      </Stack>
      <Stack display={"flex"} flexDirection={"row"} gap={0}>
        <Input
          onChange={(e) => seTitle(e.target.value)}
          border="1px"
          borderColor="blue"
          width="80%"
          placeholder="Add Todo"
          size="md"
          borderRadius={0}
        />
        <Button
          borderRadius={0}
          width={"20%"}
          colorScheme="blue"
          variant="solid"
          onClick={() => dispact(addTodo(title))}
        >
          {" "}
          Submit{" "}
        </Button>
      </Stack>
    </footer>
  );
}
