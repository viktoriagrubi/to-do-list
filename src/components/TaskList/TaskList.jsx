import styles from "./TaskList.module.css";
import iconCheck from "../../assets/images/icon-check.svg";
import clsx from "clsx";

function TaskList({ tasks, setTasks }) {
  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const handleDeleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

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
            onClick={() => handleToggleTask(task.id)}
          >
            {task.completed && (
              <img src={iconCheck} alt="checked" className={styles.checkIcon} />
            )}
          </div>

          <span className={styles.taskText}>{task.text}</span>

          <button
            className={styles.deleteButton}
            onClick={() => handleDeleteTask(task.id)}
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
