import { Route, Routes } from "react-router-dom";
import "./App.css";
import Register from "./page/Register";
import Users from "./page/Users";
import Login from "./page/Login";
import Tweet from "./page/Tweet";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register />} />
      <Route path="/users" element={<Users />} />
      <Route path="/login" element={<Login />} />
      <Route path="/tweet" element={<Tweet />} />
    </Routes>
  );
}

export default App;
