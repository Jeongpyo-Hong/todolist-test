import "./App.css";
import { useState } from "react";

let number = 1;
function App() {
  const [todos, setTodos] = useState({
    id: 1,
    title: "리액트를 배워봅시다",
  });

  const initialValue = {
    id: 0,
    title: "",
  };

  const [todo, setTodo] = useState({ initialValue });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (todo.title.trim() === "") return;
    setTodos([...todos, { ...todo, id: number }]);
    setTodo(initialValue);
    number++;
  };

  return (
    <>
      <form onSubmit={onsubmitHandler} className="form">
        <input
          name="title"
          value={todo.title}
          required
          onChange={onChangeHandler}
          type="text"
        />
        <button>추가하기</button>
      </form>
      <div className="title">
        <p>TODO LIST</p>
      </div>
      <div className="todo-wrapper">
        <div className="todo">
          <p>{todo.title}</p>
        </div>
      </div>
    </>
  );
}

export default App;
