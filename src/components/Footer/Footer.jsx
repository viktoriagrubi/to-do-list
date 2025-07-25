import styles from "./Footer.module.css";

function Footer({ todos, setTodos, filter, setFilter }) {
  const clearCompleted = () =>
    setTodos(todos.filter((todo) => !todo.completed));

  return (
    <div className={styles.footer}>
      <span>{todos.filter((t) => !t.completed).length} items left</span>
      <div className={styles.filters}>
        <button
          onClick={() => setFilter("all")}
          className={filter === "all" ? styles.active : ""}
        >
          All
        </button>
        <button
          onClick={() => setFilter("active")}
          className={filter === "active" ? styles.active : ""}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={filter === "completed" ? styles.active : ""}
        >
          Completed
        </button>
      </div>
      <button onClick={clearCompleted}>Clear Completed</button>
    </div>
  );
}

export default Footer;
