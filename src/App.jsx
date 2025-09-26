import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    const newTask = { id: uuidv4(), text: task };
    setTasks((prev) => [...prev, newTask]);
  };

  return (
    <>
      <div className={styles.appBackground}></div>
      <div className={styles.container}>
        <div className={styles.header}>TODO</div>
        <TaskInput onAddTask={handleAddTask} />
        <TaskList tasks={tasks} />
      </div>
    </>
  );
}

export default App;
