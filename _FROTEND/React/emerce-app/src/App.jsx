import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Cart from "./pages/Cart";
import History from "./pages/History";
import ProductDetail from "./pages/ProductDetail";
import MyNavbar from "./components/MyNavbar";

import { connect } from "react-redux";
import { userKeepLogin, checkStorage } from "./redux/action/user";

class App extends Component {
  componentDidMount() {
    const userLocalStorage = localStorage.getItem("userDataEmmerce");

    if (userLocalStorage) {
      const userData = JSON.parse(userLocalStorage);
      this.props.userKeepLogin(userData);
    } else {
      this.props.checkStorage();
    }
  }
  render() {
    if (this.props.userGlobal.storageIsCheck) {
      return (
        <>
          <BrowserRouter>
            <MyNavbar />
            <Routes>
              <Route Component={Home} path="/" />
              <Route Component={Login} path="/login" />
              <Route Component={Register} path="/register" />
              <Route Component={Admin} path="/admin" />
              <Route Component={Cart} path="/cart" />
              <Route Component={History} path="/history" />
              <Route Component={ProductDetail} path="/product-detail" />
            </Routes>
          </BrowserRouter>
        </>
      );
    }

    return <div>Loading...</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    userGlobal: state.user,
  };
};

const mapDispatchToProps = {
  userKeepLogin,
  checkStorage,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
