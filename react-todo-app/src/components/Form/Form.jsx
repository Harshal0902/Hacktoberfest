import React, { useState } from "react";
import styles from "./Form.module.css";

const Form = ({ addTodo }) => {
  const [todo, setTodo] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      addTodo(todo);
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
    </form>
  );
};

export default Form;
