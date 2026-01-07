import { useState, useEffect } from "react";
import styles from "./App.module.css";
import ToDoList from "./components/ToDoList/ToDoList";

import sunIcon from "./assets/images/icon-sun.svg";
import moonIcon from "./assets/images/icon-moon.svg";

function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div
        className={`${styles.appBackground} ${
          theme === "dark" ? styles.dark : styles.light
        }`}
      />

      <div className={styles.container}>
        <div className={styles.headerRow}>
          <h1 className={styles.header}>TODO</h1>

          <img
            src={theme === "dark" ? sunIcon : moonIcon}
            alt="toggle theme"
            className={styles.themeIcon}
            onClick={toggleTheme}
          />
        </div>

        <ToDoList theme={theme} />
      </div>
    </>
  );
}

export default App;
