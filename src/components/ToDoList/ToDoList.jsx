import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";
import styles from "./ToDoList.module.css";
import TaskFilter from "../TaskFilter/TaskFilter";
import Cookies from "js-cookie";

import {
  STATUS_ACTIVE,
  STATUS_ALL,
  STATUS_COMPLETED,
} from "../../constants/statuses";

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const saved = Cookies.get("tasks");
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState(STATUS_ALL);

  const handleAddTask = (text) => {
    const newTask = { id: uuidv4(), text, completed: false };
    setTasks((prev) => {
      const updated = [...prev, newTask];
      Cookies.set("tasks", JSON.stringify(updated));
      console.log("Tasks in cookies after add:", Cookies.get("tasks"));
      return updated;
    });
  };

  const handleToggleTask = (id) => {
    setTasks((prev) => {
      const updated = prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      Cookies.set("tasks", JSON.stringify(updated), { path: "/", expires: 7 });
      console.log("Tasks in cookies after toggle:", Cookies.get("tasks"));
      return updated;
    });

    setFilter(STATUS_ALL);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => {
      const updated = prev.filter((task) => task.id !== id);
      Cookies.set("tasks", JSON.stringify(updated));
      console.log("Tasks in cookies after delete:", Cookies.get("tasks"));
      return updated;
    });
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredTask = tasks.filter((task) => {
    if (filter === STATUS_ACTIVE) return !task.completed;
    if (filter === STATUS_COMPLETED) return task.completed;
    return true;
  });

  const handleClearCompleted = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to clear all completed tasks?"
    );

    if (!isConfirmed) return;
    setTasks((prev) => {
      const updated = prev.filter((task) => !task.completed);
      Cookies.set("tasks", JSON.stringify(updated));
      console.log(
        "Tasks in cookies after clear completed:",
        Cookies.get("tasks")
      );
      return updated;
    });
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
