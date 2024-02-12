import React from "react";
import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoPage from "./page/TodoPage";
import MyNavbar from "./componets/MyNavbar";

class App extends React.Component {
  render() {
    return (
      <>
        <MyNavbar />
        <TodoPage />
      </>
    );
  }
}

export default App;
