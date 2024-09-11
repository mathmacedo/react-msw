import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [errorMesage, setErrorMesage] = useState(null);

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((res) => {
        console.log('todos: ', res.todos);
        setTodos(res.todos);
        setErrorMesage(null);
      }).catch((err) => {
        console.log('error: ', err.statusText);
        console.log('error: ', err.message);
        console.log('error: ', err);
        console.log(JSON.stringify(err));
        setErrorMesage(err.message);
      })
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {todos.length && <div>Todo List : {todos.length}</div>}
      </div>
      {errorMesage && <div>{errorMesage}</div>}
    </>
  );
}

export default App;
