import { useState } from "react";
import styles from "./App.module.css";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks((prev) => [...prev, task]);
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
