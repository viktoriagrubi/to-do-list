import { useState } from "react";
import styles from "./TaskInput.module.css";

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleEnterPress = (e) => {
    if (e.key !== "Enter") return;
    if (!task.trim()) {
      setError("Task cannot be empty");
      return;
    }

    onAddTask(task);
    setTask("");
    setError("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.circle} />
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleEnterPress}
          placeholder="Add new task"
          className={styles.input}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}

export default TaskInput;
