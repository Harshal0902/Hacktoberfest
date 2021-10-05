import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo }) => {
  return <li className={styles.listItem}>{todo.text}</li>;
};

export default Todo;
