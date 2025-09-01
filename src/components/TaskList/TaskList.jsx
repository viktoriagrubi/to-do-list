import styles from "./TaskList.module.css";

function TaskList({ tasks }) {
  return (
    <div className={styles.listContainer}>
      {tasks.map((task, index) => (
        <div key={index} className={styles.taskItem}>
          <div className={styles.circle}></div>
          <span>{task}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
