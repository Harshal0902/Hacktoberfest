import React, { useState } from "react";
import { Todo } from "./components/Todo";
import "./App.css";

const App = () => {
  // Todos state hooks
  const [todos, setTodos] = useState([
    { id: 1, text: "todo 1", completed: true },
    { id: 2, text: "todo 2", completed: false },
    { id: 3, text: "todo 3", completed: true },
  ]);
  // Handle completed checkbox
  const handleCheck = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id);
    const newTodos = [...todos];
    newTodos[todoIndex] = {
      ...newTodos[todoIndex],
      completed: !newTodos[todoIndex].completed,
    };
    setTodos(newTodos);
  };
  // Handle delete button
  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  // RENDER UI
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            handleCheck={() => handleCheck(todo.id)}
            handleDelete={() => handleDelete(todo.id)}
          />
        ))}
      </ul>
    </div>
  );
};

export default App;
