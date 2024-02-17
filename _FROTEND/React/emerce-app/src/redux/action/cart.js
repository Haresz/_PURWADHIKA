import Axios from "axios";
import { API_URL } from "../../constants/API";

export const getCartData = (userId) => {
  return (dispatc) => {
    Axios.get(`${API_URL}cart`, {
      params: { userId: userId },
    })
      .then((res) => {
        dispatc({
          type: "FILL_CART",
          payload: res.data,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
