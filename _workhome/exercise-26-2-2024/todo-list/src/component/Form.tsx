import { Stack, Input, Button, Text } from "@chakra-ui/react";
export default function Form() {
  return (
    <footer className="w-full">
      <hr />
      <Stack margin={4}>
        <Text fontWeight={"bold"}> Add Todo </Text>
        <Text>Done : 0</Text>
      </Stack>
      <Stack display={"flex"} flexDirection={"row"} gap={0}>
        <Input
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
        >
          {" "}
          Submit{" "}
        </Button>
      </Stack>
    </footer>
  );
}
