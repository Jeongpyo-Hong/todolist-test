import "./App.css";
import { useState } from "react";

const Todo = ({ todo }) => {
  return (
    <div className="todo">
      <p>{todo.title}</p>
    </div>
  );
};

const List = ({ todos, setTodos }) => {
  return (
    <div className="todo-wrapper">
      {todos.map((todo) => {
        return (
          <Todo todo={todo} key={todo.id} setTodos={setTodos} />
        );
      })}
    </div>
  );
};

let number = 2;
const Form = ({ todos, setTodos }) => {
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
    </>
  );
};

function App() {
  const [todos, setTodos] = useState( // 이걸 배열로 안 만들어서 실패...!
    [
      {
        id: 1,
        title: "리액트를 배워봅시다",
      }
    ]);

  return (
    <>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
