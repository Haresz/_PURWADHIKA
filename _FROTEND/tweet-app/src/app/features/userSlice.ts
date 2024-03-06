import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllUser, registerUser } from "../../api/user";

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface UserState {
  users: User[];
}

const initialState: UserState = {
  users: [],
};

const fetchAllUsers = createAsyncThunk("user/fetchAllUsers", async () => {
  const response = await getAllUser();
  return response.data;
});

const registerActionUser: any = createAsyncThunk(
  "user/registerUser",
  async (data: {
    id: string;
    name: string;
    email: string;
    password: string;
  }) => {
    const response = await registerUser(data);
    return response.data;
  }
);

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
    builder.addCase(registerActionUser.fulfilled, () => {});
  },
});

export { fetchAllUsers, registerActionUser };

export default userSlice.reducer;
