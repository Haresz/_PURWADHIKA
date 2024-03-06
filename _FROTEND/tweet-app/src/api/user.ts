import axios from "axios";

export function getAllUser() {
  return axios.get("http://localhost:2000/users");
}

export function registerUser(data: {
  id: string;
  name: string;
  email: string;
  password: string;
}) {
  return axios.post("http://localhost:2000/users", data);
}
