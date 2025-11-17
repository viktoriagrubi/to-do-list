import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";
import styles from "./ToDoList.module.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    const newTask = { id: uuidv4(), text, completed: false };
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
    <div className={styles.todoContainer}>
      <TaskInput onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default ToDoList;
