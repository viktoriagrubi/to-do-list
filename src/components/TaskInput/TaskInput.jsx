import { useState } from "react";
import styles from "./TaskInput.module.css";

function TaskInput({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleEnterPress = (e) => {
    if (e.key !== "Enter") return;
    if (!task.trim()) return;

    onAddTask(task);
    setTask("");
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
    </div>
  );
}

export default TaskInput;
