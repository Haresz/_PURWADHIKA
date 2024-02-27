import { Stack, Input, Button, Text } from "@chakra-ui/react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ITodos from "../interface/ITodo";

export default function Form() {
  const [title, seTitle] = useState("");
  const id: string = uuidv4();
  let storage: any = localStorage.getItem("TODOS");
  let datas = JSON.parse(storage);

  const handleAddTodo = () => {
    let newTodo: ITodos = {
      id: id,
      title: title,
      complate: false,
    };
    if (storage == null) {
      localStorage.setItem("TODOS", JSON.stringify([newTodo]));
    } else {
      datas.push(newTodo);
      localStorage.setItem("TODOS", JSON.stringify(datas));
      location.reload();
    }
  };

  return (
    <footer className="w-full">
      <hr />
      <Stack margin={4}>
        <Text fontWeight={"bold"}> Add Todo </Text>
        <Text>
          Done : {datas.filter((todo: ITodos) => todo.complate === true).length}
        </Text>
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
          onClick={handleAddTodo}
        >
          {" "}
          Submit{" "}
        </Button>
      </Stack>
    </footer>
  );
}
