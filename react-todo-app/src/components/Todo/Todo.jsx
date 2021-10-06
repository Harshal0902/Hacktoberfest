import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo }) => {
  return (
    <li className={styles.listitem}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
        />
        {todo.text}
      </label>
    </li>
  );
};

export default Todo;
