import { useState } from "react";
import styles from "./TaskInput.module.css";

function TaskInput() {
  const [task, setTask] = useState("");

  const handleEnterPress = (e) => {
    if (e.key !== "Enter") {
      return;
    }
    if (!task.trim()) return;
    setTask("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.inputWrapper}>
        <div className={styles.circle}></div>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleEnterPress}
          placeholder="Currently typing"
          className={styles.input}
        />
      </div>
    </div>
  );
}

export default TaskInput;
