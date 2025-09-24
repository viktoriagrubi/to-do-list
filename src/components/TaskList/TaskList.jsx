import styles from "./TaskList.module.css";
import { v4 as uuidv4 } from "uuid";

function TaskList({ tasks }) {
  return (
    <div className={styles.listContainer}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.taskItem}>
          <div className={styles.circle}></div>
          <span>{task}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
