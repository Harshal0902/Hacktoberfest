import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const [error, setError] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      addTodo(todo);
      setTodo("");
      setError("");
    } else {
      setError("This field must be filled");
    }
  };
  return (
    <form onSubmit={(e) => onSubmit(e)} className={styles.form}>
      <input
        className={styles.textInput}
        type="text"
        name="todo"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <input className={styles.submitBtn} type="submit" value="Add" />
      <p className={styles.error}>{error}</p>
    </form>
  );
};

export default Form;
