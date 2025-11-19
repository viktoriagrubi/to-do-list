import styles from "./TaskList.module.css";
import iconCheck from "../../assets/images/icon-check.svg";
import clsx from "clsx";

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
  return (
    <div className={styles.listContainer}>
      {tasks.map((task) => (
        <div
          key={task.id}
          className={clsx(styles.taskItem, {
            [styles.completed]: task.completed,
          })}
        >
          <div
            className={clsx(styles.circle, {
              [styles.checkedCircle]: task.completed,
            })}
            onClick={() => onToggleTask(task.id)}
          >
            {task.completed && (
              <img src={iconCheck} alt="checked" className={styles.checkIcon} />
            )}
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
