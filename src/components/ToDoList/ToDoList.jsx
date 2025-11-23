import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";
import styles from "./ToDoList.module.css";
import TaskFilter from "../TaskFilter/TaskFilter";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("All");

  const handleAddTask = (text) => {
    const newTask = { id: uuidv4(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

    setFilter("All");
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTask = tasks.filter((tasks) => {
    if (filter === "Active") return !tasks.completed;
    if (filter === "Completed") return tasks.completed;
    return true;
  });

  const handleClearCompleted = () => {
    setTasks((prev) => prev.filter((task) => !task.completed));
  };
  return (
    <div className={styles.todoContainer}>
      <TaskInput onAddTask={handleAddTask} />
      <div className={styles.taskBox}>
        <TaskList
          tasks={filteredTask}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
        />

        <div className={styles.bottomBar}>
          <span>{tasks.filter((t) => !t.completed).length} items left</span>

          <TaskFilter
            onFilterChange={handleFilterChange}
            onClearCompleted={handleClearCompleted}
            activeFilter={filter}
          />
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
