import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";

import styles from "./ToDoList.module.css";

import {
  COOKIE_TASKS_KEY,
  COOKIE_DEFAULT_SETTINGS,
} from "../../constants/cookies";

import {
  STATUS_ACTIVE,
  STATUS_ALL,
  STATUS_COMPLETED,
} from "../../constants/statuses";

function ToDoList({ theme }) {
  const [tasks, setTasks] = useState(() => {
    const saved = Cookies.get(COOKIE_TASKS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const [filter, setFilter] = useState(STATUS_ALL);

  const handleAddTask = (text) => {
    const newTask = {
      id: uuidv4(),
      text,
      completed: false,
    };

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

  const filteredTasks = tasks.filter((task) => {
    if (filter === STATUS_ACTIVE) return !task.completed;
    if (filter === STATUS_COMPLETED) return task.completed;
    return true;
  });

  return (
    <div
      className={`${styles.todoContainer} ${
        theme === "dark" ? styles.dark : styles.light
      }`}
    >
      <TaskInput onAddTask={handleAddTask} theme={theme} />

      <div className={styles.taskBox}>
        <TaskList
          tasks={filteredTasks}
          onToggleTask={handleToggleTask}
          onDeleteTask={handleDeleteTask}
          theme={theme}
        />

        <div className={styles.bottomBar}>
          <span>
            {tasks.filter((task) => !task.completed).length} items left
          </span>

          <TaskFilter
            activeFilter={filter}
            onFilterChange={handleFilterChange}
            onClearCompleted={handleClearCompleted}
            theme={theme}
          />
        </div>
      </div>
    </div>
  );
}

export default ToDoList;
