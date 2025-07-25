import TodoItem from "../TodoItem/TodoItem";
import styles from "./TodoList.module.css";

function TodoList({ todos, setTodos }) {
  return (
    <ul className={styles.list}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </ul>
  );
}

export default TodoList;
