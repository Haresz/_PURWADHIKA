import InputPassword from "@/component/InputPassword";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useFormik, ErrorMessage } from "formik";
import * as Yup from "yup";
import React from "react";

const LoginSchema = Yup.object().shape({
  username: Yup.string().required(),
  password: Yup.string().required(),
});

export default function LoginPage() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <Box
      position="relative"
      width={400}
      textAlign={"center"}
      mx={"auto"}
      className="flex flex-col gap-8 mt-28"
    >
      <Heading as="h3" size="lg">
        Login Page
      </Heading>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8 mt-8">
        <Input
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          variant="outline"
          placeholder="Username"
        />
        <InputPassword
          placeholder="Password"
          name={"password"}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <Button
          type="submit"
          className="w-full"
          colorScheme="gray"
          variant="solid"
        >
          Submit
        </Button>
      </form>
    </Box>
  );
}
