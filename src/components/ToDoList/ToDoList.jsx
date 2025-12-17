import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";
import styles from "./ToDoList.module.css";
import TaskFilter from "../TaskFilter/TaskFilter";
import Cookies from "js-cookie";
import { COOKIE_TASKS_KEY } from "../../constants/cookies";
import { COOKIE_DEFAULT_SETTINGS } from "../../constants/cookies";

import {
  STATUS_ACTIVE,
  STATUS_ALL,
  STATUS_COMPLETED,
} from "../../constants/statuses";

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const saved = Cookies.get(COOKIE_TASKS_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState(STATUS_ALL);

  const handleAddTask = (text) => {
    const newTask = { id: uuidv4(), text, completed: false };
    setTasks((prev) => {
      const updated = [...prev, newTask];
      Cookies.set(
        COOKIE_TASKS_KEY,
        JSON.stringify(updated),
        COOKIE_DEFAULT_SETTINGS
      );
      return updated;
    });
  };

  const handleToggleTask = (id) => {
    setTasks((prev) => {
      const updated = prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      );
      Cookies.set(
        COOKIE_TASKS_KEY,
        JSON.stringify(updated),
        COOKIE_DEFAULT_SETTINGS
      );
      return updated;
    });

    setFilter(STATUS_ALL);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => {
      const updated = prev.filter((task) => task.id !== id);
      Cookies.set(
        COOKIE_TASKS_KEY,
        JSON.stringify(updated),
        COOKIE_DEFAULT_SETTINGS
      );
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
      Cookies.set(
        COOKIE_TASKS_KEY,
        JSON.stringify(updated),
        COOKIE_DEFAULT_SETTINGS
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
