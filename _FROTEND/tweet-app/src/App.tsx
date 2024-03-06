import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./page/Register";
import Users from "./page/Users";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}

export default App;
