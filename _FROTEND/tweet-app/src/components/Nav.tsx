import { Box, Link } from "@chakra-ui/react";

export default function Nav() {
  return (
    <Box
      className="fixed top-0 inset-x-0"
      zIndex={999}
      display={"flex"}
      justifyContent={"space-around"}
      backgroundColor={"white"}
      borderBottomWidth={"4px"}
      borderRadius={"lg"}
      padding={"8"}
    >
      <Link href="/">Register</Link>
      <Link href="/login">Login</Link>
      <Link href="/tweet">Tweet</Link>
      <Link href="/users">Users</Link>
    </Box>
  );
}
