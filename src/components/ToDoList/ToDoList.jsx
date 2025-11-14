import { useState } from "react";
import TaskInput from "../TaskInput/TaskInput";
import TaskList from "../TaskList/TaskList";
import styles from "./ToDoList.module.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className={styles.todoContainer}>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default ToDoList;
