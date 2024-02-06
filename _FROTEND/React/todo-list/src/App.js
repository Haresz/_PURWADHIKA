import "./App.css";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import TodoItem from "./componets/TodoItem";

function App() {
  return (
    <div className="m-5">
      <h1>Todo List</h1>
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
}

export default App;
