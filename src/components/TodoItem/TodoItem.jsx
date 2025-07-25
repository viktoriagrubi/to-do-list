import styles from "./TodoItem.module.css";
import checkIcon from "../../assets/images/icon-check.svg";

function TodoItem({ todo, setTodos }) {
  const toggle = () =>
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );

  const remove = () => setTodos((prev) => prev.filter((t) => t.id !== todo.id));

  return (
    <li className={`${styles.item} ${todo.completed ? styles.completed : ""}`}>
      <label className={styles.checkbox}>
        <input type="checkbox" checked={todo.completed} onChange={toggle} />
        <span className={styles.circle}>
          {todo.completed && (
            <img src={checkIcon} alt="check" className={styles.checkIcon} />
          )}
        </span>
      </label>

      <span className={styles.text}>{todo.text}</span>
      <button onClick={remove}>✕</button>
    </li>
  );
}

export default TodoItem;
