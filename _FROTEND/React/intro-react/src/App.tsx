import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Hello World</h1>
        <hr />
        <p>Belajar React TS</p>
      </div>
    </>
  );
}

export default App;
