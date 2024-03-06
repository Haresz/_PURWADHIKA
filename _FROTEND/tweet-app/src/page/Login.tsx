import { useFormik } from "formik";
import * as Yup from "yup";
import { InputGroup } from "./Register";
import { Heading, Button, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useEffect } from "react";
import { fetchAllUsers } from "../app/features/userSlice";
import { useNavigate } from "react-router";

const loginSchema = Yup.object().shape({
  name: Yup.string().required("Input Required"),
  password: Yup.string().required("Input Required"),
});

export default function Login() {
  const users: any = useSelector((state: RootState) => state.userSlice.users);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);
  const formik = useFormik({
    validationSchema: loginSchema,
    initialValues: {
      name: "",
      password: "",
    },
    onSubmit: (values) => {
      const index = users.findIndex((val: any) => val.name === values.name);
      if (
        users[index].password == values.password &&
        users[index].name == values.name
      ) {
        navigate("/users");
        localStorage.setItem("users", users[index].name);
        localStorage.setItem("userId", users[index].id);
      } else {
        alert("password or name is wrong");
      }
    },
  });

  return (
    <Box
      className="mt-20"
      borderWidth={"1px"}
      borderRadius={"lg"}
      borderColor={"blue"}
      padding={"8"}
    >
      <Heading as="h4" size="md">
        Login
      </Heading>
      <form onSubmit={() => formik.handleSubmit()}>
        <InputGroup onChange={formik.handleChange} name="name" title="Name" />
        {formik.errors.name && (
          <div style={{ color: "red" }}>
            {JSON.stringify(formik.errors.name)}
          </div>
        )}
        <InputGroup
          onChange={formik.handleChange}
          name="password"
          title="Password"
          type="password"
        />
        {formik.errors.password && (
          <div style={{ color: "red" }}>
            {JSON.stringify(formik.errors.password)}
          </div>
        )}

        <div>
          <Button colorScheme="blue" marginTop={8} width={"full"} type="submit">
            Log in
          </Button>
        </div>
      </form>
    </Box>
  );
}
