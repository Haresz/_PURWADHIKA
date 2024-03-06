import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers } from "../app/features/userSlice";
import { RootState } from "../app/store";
import { useEffect } from "react";
import {
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
} from "@chakra-ui/react";

export default function Users() {
  const users = useSelector((state: RootState) => state.userSlice.users);
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <TableContainer className="mt-32">
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Data Users</TableCaption>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>email</Th>
            <Th>password</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr>
              <Td>{user.id}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td>{user.password}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
