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

export const loginUser = ({ username, password }) => {
  return (dispatch) => {
    Axios.get(`${API_URL}users`, {
      params: {
        username,
      },
    })
      .then((res) => {
        if (res.data.length > 0) {
          if (password === res.data[0].password) {
            delete res.data[0].password;
            localStorage.setItem(
              "userDataEmmerce",
              JSON.stringify(res.data[0])
            );
            dispatch({
              type: "USER_LOGIN",
              payload: res.data[0],
            });
          } else {
            // handle errors wrong password
            dispatch({
              type: "USER_ERROR",
              payload: "wrong password",
            });
          }
        } else {
          // Handle error username not found
          dispatch({
            type: "USER_ERROR",
            payload: "username not found",
          });
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const logoutUser = () => {
  localStorage.removeItem("userDataEmmerce");
  return {
    type: "USER_LOGOUT",
  };
};

export const userKeepLogin = (userData) => {
  return (dispatch) => {
    Axios.get(`${API_URL}users`, {
      params: { id: userData.id },
    })
      .then((res) => {
        delete res.data[0].password;
        localStorage.setItem("userDataEmmerce", JSON.stringify(res.data[0]));
        dispatch({
          type: "USER_LOGIN",
          payload: res.data[0],
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};

export const checkStorage = () => {
  return {
    type: "CHECK_STORAGE",
  };
};
