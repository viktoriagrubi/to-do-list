import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./TaskInput.module.css";

function TaskInput({ tasks, setTasks }) {
  const [task, setTask] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = (taskText) => {
    const newTask = { id: uuidv4(), text: taskText, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleEnterPress = (e) => {
    if (e.key !== "Enter") return;
    if (!task.trim()) {
      setError("Task cannot be empty");
      return;
    }

    handleAddTask(task);
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
