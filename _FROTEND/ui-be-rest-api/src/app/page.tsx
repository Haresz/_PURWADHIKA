"use client";
import { Stack } from "@chakra-ui/react";
import RegisterPage from "./component/RegisterPage";
import LoginPage from "./component/LoginPage";

export default function Home() {
  return (
    <Stack className="gap-10" direction={"row"}>
      <RegisterPage />
      <LoginPage />
    </Stack>
  );
}
