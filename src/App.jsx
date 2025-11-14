import styles from "./App.module.css";
import ToDoList from "./components/ToDoList/ToDoList";

function App() {
  return (
    <>
      <div className={styles.appBackground}></div>
      <div className={styles.container}>
        <div className={styles.header}>TODO</div>
        <ToDoList />
      </div>
    </>
  );
}

export default App;
