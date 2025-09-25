import styles from "./TaskList.module.css";

function TaskList({ tasks }) {
  return (
    <div className={styles.listContainer}>
      {tasks.map((task) => (
        <div key={task.id} className={styles.taskItem}>
          <div className={styles.circle}></div>
          <span>{task.text}</span>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
