import "./App.css";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

function App() {
  return (
    <>
      <div className="bg-blue-500 p-4 rounded-md">
        <h1 className="text-white">Hello world!</h1>;
      </div>
      <Card className="w-[50%]">
        <CardHeader bgColor={"pink"} color={"white"} className="font-bold">
          Card Header
        </CardHeader>
        <CardBody>Ini card body</CardBody>
        <CardFooter>
          <Button colorScheme="blue">Click</Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default App;
