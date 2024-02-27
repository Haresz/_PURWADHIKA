import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import ITodos from "../interface/ITodo";

export default function Todo(props: any) {
  let storage: any = localStorage.getItem("TODOS");
  let datas = JSON.parse(storage);

  const handleDeleteTodo = (id: string) => {
    let index = datas.findIndex((todo: ITodos) => todo.id === id);
    console.log(index);
    datas.splice(index, 1);
    localStorage.setItem("TODOS", JSON.stringify(datas));
    alert("TODO deleted");
    location.reload();
  };

  const handleComplateTodo = (id: string) => {
    let index = datas.findIndex((todo: ITodos) => todo.id === id);
    datas[index].complate = !datas[index].complate;
    localStorage.setItem("TODOS", JSON.stringify(datas));
    console.log(id, index);
    location.reload();
  };

  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderRadius={"md"}
      bg="transaparent"
      w="500px"
    >
      <div className="flex items-center">
        <Checkbox
          onChange={() => handleComplateTodo(props.id)}
          isChecked={props.done}
          size="lg"
          colorScheme="green"
        />
        <Text marginLeft={8} fontSize="lg">
          {props.title}
        </Text>
      </div>

      <Button
        onClick={() => handleDeleteTodo(props.id)}
        colorScheme="red"
        variant="outline"
      >
        <MdDelete />
      </Button>
    </Box>
  );
}
