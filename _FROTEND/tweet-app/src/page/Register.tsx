import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { registerActionUser } from "../app/features/userSlice";
import { useNavigate } from "react-router";

const userSchema = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string()
    .min(6, "min 6 characters")
    .required("input required")
    .default(""),
  email: Yup.string().email("input not email type").required("input required"),
  password: Yup.string().required("input required").min(6, "min 6 characters"),
});

export const InputGroup = (props: any) => {
  return (
    <div className="flex flex-col items-start mt-8">
      <label htmlFor={props.name}>{props.title}</label>
      <Input
        className="mt-4 p-2 w-full border border-gray-600 rounded-lg"
        type={props.type || "text"}
        name={props.name}
        id={props.name}
        onChange={props.onChange}
      />
    </div>
  );
};

export default function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddUser = async (values: any) => {
    dispatch(registerActionUser(values));
    alert("Register successfully");
    navigate("/users")
  };

  const formik = useFormik({
    initialValues: {
      id: uuidv4(),
      name: "",
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => handleAddUser(values),
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
        Register
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
          name="email"
          title="Email"
          type="email"
        />
        {formik.errors.email && (
          <div style={{ color: "red" }}>
            {JSON.stringify(formik.errors.email)}
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
            Sign Up
          </Button>
        </div>
      </form>
    </Box>
  );
}
