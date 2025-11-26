import styles from "./TaskFilter.module.css";
import {
  STATUS_ACTIVE,
  STATUS_ALL,
  STATUS_COMPLETED,
} from "../../constants/statuses";

import clsx from "clsx";

function TaskFilter({ onFilterChange, onClearCompleted, activeFilter }) {
  return (
    <div className={styles.filterContainer}>
      <button
        className={clsx({ [styles.active]: activeFilter === STATUS_ALL })}
        onClick={() => onFilterChange(STATUS_ALL)}
      >
        All
      </button>

      <button
        className={clsx({ [styles.active]: activeFilter === STATUS_ACTIVE })}
        onClick={() => onFilterChange(STATUS_ACTIVE)}
      >
        Active
      </button>

      <button
        className={clsx({ [styles.active]: activeFilter === STATUS_COMPLETED })}
        onClick={() => onFilterChange(STATUS_COMPLETED)}
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
