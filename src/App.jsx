import styles from "./App.module.css";
import TaskInput from "./components/TaskInput/TaskInput";

function App() {
  return (
    <>
      <div className={styles.appBackground}></div>
      <div className={styles.container}>
        <div className={styles.header}>TODO</div>
        <TaskInput />
      </div>
    </>
  );
}

export default App;
