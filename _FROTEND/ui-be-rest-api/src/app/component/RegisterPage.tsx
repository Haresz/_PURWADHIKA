import InputPassword from "@/component/InputPassword";
import { Box, Button, Heading, Input } from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import React from "react";
import axios from "axios";
import { URL_API } from "../../helper";

const RegisterSchema = Yup.object().shape({
  username: Yup.string().required("input required!"),
  email: Yup.string().email().required("input required!"),
  password: Yup.string().required("input required!"),
  confirmPassword: Yup.string().required("input required!"),
});

export default function RegisterPage() {
  const regHandler = (values: any) => {
    console.log(values, "regHandler");
    axios
      .post(`${URL_API}/users/register`, { values })
      .then(function (response) {
        console.log(response);
        console.log("response");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values: any) => {
      delete values.confirmPassword;
      console.log(values);
      regHandler(values);
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
        Register Page
      </Heading>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-8 mt-8">
        <Input
          name="username"
          onChange={formik.handleChange}
          value={formik.values.username}
          variant="outline"
          placeholder="Username"
        />
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          variant="outline"
          placeholder="Email"
          type="email"
        />
        <InputPassword
          placeholder="Enter password"
          name={"password"}
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <InputPassword
          placeholder="Confirm password"
          name={"confirmPassword"}
          onChange={formik.handleChange}
          value={formik.values.confirmPassword}
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
