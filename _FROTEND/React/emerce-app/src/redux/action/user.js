import Axios from "axios";
import { API_URL } from "../../constants/API";

export const registerUser = ({ fullname, username, email, password }) => {
  return (dispatch) => {
    Axios.post(`${API_URL}users`, {
      fullname,
      username,
      email,
      password,
      role: "user",
    })
      .then((res) => {
        delete res.data.password;
        dispatch({
          type: "USER_LOGIN",
          payload: res.data,
        });
        alert("Register Success!");
      })
      .catch(() => {
        alert("Register Failure!");
      });
  };
};
