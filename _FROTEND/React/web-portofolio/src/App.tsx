import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Navbar from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route Component={Home} path="/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
