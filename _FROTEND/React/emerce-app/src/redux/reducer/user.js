const init_state = {
  username: "",
  fullname: "",
  email: "",
  role: "",
  id: 0,
  errMsg: "",
  storageIsCheck: false,
};

const reducer = (state = init_state, action) => {
  switch (action?.type) {
    case "USER_LOGIN":
      return { ...state, ...action.payload, storageIsCheck: true };

    case "USER_ERROR":
      return { ...state, errMsg: action.payload };

    case "USER_LOGOUT":
      return { ...init_state, storageIsCheck: true };

    case "CHECK_STORAGE":
      return { ...state, storageIsCheck: true };

    default:
      return state;
  }
};

export default reducer;
