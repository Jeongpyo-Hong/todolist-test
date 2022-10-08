import React, { useState } from "react";
import "./App.css";

function List({ todo }) {
  return (
    <div className="todo">
      <h3>제목: {todo.title}</h3>
      <p>내용: {todo.content}</p>
    </div>
  );
}

const App = () => {
  const [todos, setTodos] = useState([]);

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    content: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setTodo({
      ...todo,
      [name]: value,
    });
  };

  const onClick = () => {
    setTodos([
      ...todos,
      { id: Date.now(), title: todo.title, content: todo.content },
    ]);
    setTodo({ title: "", content: "" });
  };

  console.log(todos);

  return (
    <div>
      <div className="form">
        <label>제목</label>
        <input
          name="title"
          value={todo.title}
          onChange={onChange}
          type="text"
        />
        <label>내용</label>
        <input
          name="content"
          value={todo.content}
          onChange={onChange}
          type="text"
        />
        <button onClick={onClick}>추가하기</button>
      </div>
      <div className="title">
        <h1># TODO LIST# </h1>
      </div>
      <div className="todo-wrapper">
        {todos.map((todo) => (
          <List todo={todo} key={todo.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
