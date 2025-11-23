import styles from "./TaskFilter.module.css";

function TaskFilter({ onFilterChange, onClearCompleted, activeFilter }) {
  return (
    <div className={styles.filterContainer}>
      <button
        className={activeFilter === "All" ? styles.active : ""}
        onClick={() => onFilterChange("All")}
      >
        All
      </button>

      <button
        className={activeFilter === "Active" ? styles.active : ""}
        onClick={() => onFilterChange("Active")}
      >
        Active
      </button>

      <button
        className={activeFilter === "Completed" ? styles.active : ""}
        onClick={() => onFilterChange("Completed")}
      >
        Completed
      </button>

      <button className={styles.clear} onClick={onClearCompleted}>
        Clear Completed
      </button>
    </div>
  );
}

export default TaskFilter;
