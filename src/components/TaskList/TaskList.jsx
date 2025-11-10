import styles from "./TaskList.module.css";
import iconCheck from "../../assets/images/icon-check.svg";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className={styles.listContainer}>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={
            styles.taskItem + " " + (task.completed ? styles.completed : "")
          }
        >
          <div
            className={
              styles.circle + " " + (task.completed ? styles.checkedCircle : "")
            }
            onClick={() => onToggleTask(task.id)}
          >
            {task.completed ? (
              <img src={iconCheck} alt="checked" className={styles.checkIcon} />
            ) : null}
          </div>

          <span className={styles.taskText}>{task.text}</span>

          <button
            className={styles.deleteButton}
            onClick={() => onDeleteTask(task.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
