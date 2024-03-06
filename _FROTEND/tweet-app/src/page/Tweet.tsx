import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Input,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { addtweetAction, fetchAllTweets } from "../app/features/tweetSlice";
import { RootState } from "../app/store";
import { useEffect, useState } from "react";

const tweetShema = Yup.object().shape({
  userId: Yup.string(),
  name: Yup.string(),
  tweetId: Yup.string(),
  content: Yup.string().max(50, "max 50 chracters").required(),
});

export default function Tweet() {
  const tweets = useSelector((state: RootState) => state.tweetSlice.tweets);
  const dispatch = useDispatch();
  const name = localStorage.getItem("users");
  const userId = localStorage.getItem("userId");
  const [character, setCharacter] = useState("");

  const handleChange = (e: any) => {
    setCharacter(e.target.value);
    console;
  };

  useEffect(() => {
    dispatch(fetchAllTweets());
  }, [tweets]);

  const formik = useFormik({
    initialValues: {
      userId: userId,
      name: name,
      tweetId: uuidv4(),
      content: "",
    },
    validationSchema: tweetShema,
    onSubmit: (values: any) => {
      alert("Tweet successfully");
      console.log(values);
      dispatch(addtweetAction(values));
    },
  });

  return (
    <div className="mt-26">
      <Box
        className="mt-20 text-left"
        borderWidth={"1px"}
        borderRadius={"lg"}
        borderColor={"blue"}
        padding={"4"}
      >
        <h1>Add tweet</h1>
        <form onSubmit={formik.handleSubmit}>
          <Input
            marginTop={4}
            placeholder="What Do you think ?"
            size="sm"
            resize={"none"}
            name="content"
            onChange={(e) => {
              handleChange(e);
              formik.handleChange(e);
            }}
          />
          {formik.errors.content && (
            <div style={{ color: "red" }}>
              {JSON.stringify(formik.errors.content)}
            </div>
          )}
          <Button colorScheme="blue" marginTop={8} width={"full"} type="submit">
            add tweet
          </Button>
        </form>
      </Box>
      <SimpleGrid
        marginTop={8}
        spacing={4}
        templateColumns="repeat(auto-fill, minmax(300px, 1fr))"
      >
        {tweets.map((tweet) => (
          <Card>
            <CardHeader className="flex items-center justify-between">
              <Heading size="md">{tweet.name}</Heading>
              <Button>Follow</Button>
            </CardHeader>
            <CardBody>
              <Text>{tweet.content}</Text>
            </CardBody>
            <CardFooter>
              <Button>Like</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </div>
  );
}
