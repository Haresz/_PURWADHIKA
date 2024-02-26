import { Box, Button, Checkbox, Text } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

export default function Todo() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      borderRadius={"md"}
      bg="transaparent"
      w="500px"
      p={4}
    >
      <div className="flex items-center">
        <Checkbox size="lg" colorScheme="green" />
        <Text marginLeft={8} fontSize="lg">
          (lg) In love with React & Next
        </Text>
      </div>

      <Button colorScheme="red" variant="outline">
        <MdDelete />
      </Button>
    </Box>
  );
}
