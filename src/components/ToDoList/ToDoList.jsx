import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import { v4 as uuidv4 } from "uuid";
import styles from "./ToDoList.module.css";
import TaskFilter from "../TaskFilter/TaskFilter";

import {
  STATUS_ACTIVE,
  STATUS_ALL,
  STATUS_COMPLETED,
} from "../../constants/statuses";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState(STATUS_ALL);

  const handleAddTask = (text) => {
    const newTask = { id: uuidv4(), text, completed: false };
    setTasks((prev) => [...prev, newTask]);
  };

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

    setFilter(STATUS_ALL);
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
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
