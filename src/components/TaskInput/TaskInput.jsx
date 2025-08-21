import { useState } from "react";
import styles from "./TaskInput.module.css";

function TaskInput() {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.circle}></div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Currently typing"
          className={styles.input}
        />
      </div>
    </form>
  );
}

export default TaskInput;
