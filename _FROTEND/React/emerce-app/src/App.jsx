import React, { Component } from "react";
import logo from "./logo.svg";
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

class App extends Component {
  render() {
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
}

export default App;
