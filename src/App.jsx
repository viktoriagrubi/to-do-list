import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import styles from "./App.module.css";
import TaskInput from "./components/TaskInput/TaskInput";
import TaskList from "./components/TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    const newTask = { id: uuidv4(), text: task, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className={styles.appBackground}></div>
      <div className={styles.container}>
        <div className={styles.header}>TODO</div>
        <TaskInput onAddTask={handleAddTask} />
        <TaskList
          tasks={tasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />
      </div>
    </>
  );
}

export default App;
