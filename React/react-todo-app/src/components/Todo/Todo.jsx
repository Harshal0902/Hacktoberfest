import React from "react";
import styles from "./Todo.module.css";

const Todo = ({ todo, handleCheck, handleDelete }) => {
  return (
    <li className={styles.listitem}>
      <label>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={todo.completed}
          onChange={handleCheck}
        />
        {todo.text}
      </label>
      {todo.completed && (
        <button onClick={handleDelete} className={styles.delete}>
          delete
        </button>
      )}
    </li>
  );
};

export default Todo;
