import Axios from "axios";

export const changeTodoCount = (newCount) => {
  return {
    type: "CHANGE_TODO_COUNT",
    payload: newCount,
  };
};

export const fetchTodoGlobal = () => {
  return (dispatch) => {
    Axios.get("http://localhost:2000/todo")
      .then((res) => {
        dispatch({
          type: "GET_TODO",
          payload: res.data,
        });
        dispatch({
          type: "CHANGE_TODO_COUNT",
          payload: res.data.length,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const deleteTodoGlobal = (id) => {
  return (dispatch) => {
    Axios.delete(`http://localhost:2000/todo/${id}`)
      .then(() => {
        alert("Todo deleted");
        dispatch({
          type: "DELETE_TODO",
          payload: id,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};

export const completeTodoGlobal = (id) => {
  return (dispatch) => {
    Axios.patch(`http://localhost:2000/todo/${id}`, {
      complete: true,
    }).then(() => {
      dispatch({
        type: "COMPLETE_TODO",
        payload: id,
      });
    });
  };
};

export const addTodoGlobal = (input) => {
  return (dispatch) => {
    Axios.post("http://localhost:2000/todo", {
      activity: input,
      complete: false,
    })
      .then((res) => {
        alert("Berhasil menambahkan todo");
        console.log(res);
        dispatch({
          type: "ADD_TODO",
          payload: res.data,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
};
