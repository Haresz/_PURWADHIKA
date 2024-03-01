import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { deleteTodo, doneTodo } from "../app/features/TodoSlice";

export default function Todo(props: any) {
  const Todos = useSelector((state: RootState) => state.todo.todos);
  const dispact = useDispatch();

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
          onChange={() => dispact(doneTodo(props.id))}
          isChecked={props.done}
          size="lg"
          colorScheme="green"
        />
        <Text marginLeft={8} fontSize="lg">
          {props.title}
        </Text>
      </div>

      <Button
        onClick={() => dispact(deleteTodo(props.id))}
        colorScheme="red"
        variant="outline"
      >
        <MdDelete />
      </Button>
    </Box>
  );
}
