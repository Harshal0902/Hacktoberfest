import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <form onSubmit={() => console.log("asdf")} className={styles.form}>
      <input className={styles.textInput} type="text" name="todo" />
      <input className={styles.submitBtn} type="submit" value="Add" />
    </form>
  );
};

export default Form;
