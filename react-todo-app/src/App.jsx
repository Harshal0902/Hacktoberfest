import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./components/Todo";
import { Form } from "./components/Form";
import "./App.css";

const App = () => {
  // Todos state hooks
  const [todos, setTodos] = useState([]);
  // Load todos form localStorage on app start
  useEffect(() => {
    const todos = localStorage.getItem("todos");
    if (todos) {
      const todosJSON = JSON.parse(todos);
      setTodos(todosJSON);
    }
  }, []);
  // Save todos to localStorage on state update
  useEffect(() => {
    const stringTodos = JSON.stringify(todos);
    localStorage.setItem("todos", stringTodos);
  }, [todos]);
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
  // Handle add todo
  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      text: todo,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };
  // RENDER UI
  return (
    <div className="container">
      <h1 className="title">Todo List</h1>
      <Form addTodo={addTodo} />
      <ul>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleCheck={() => handleCheck(todo.id)}
              handleDelete={() => handleDelete(todo.id)}
            />
          ))
        ) : (
          <p>No todos found. Please add something :)</p>
        )}
      </ul>
    </div>
  );
};

export default App;
