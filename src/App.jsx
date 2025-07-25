import { useState, useEffect } from "react";
import styles from "./App.module.css";
import bgLight from "./assets/images/bg-desktop-light.jpg";
import bgDark from "./assets/images/bg-desktop-dark.jpg";

import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import TodoList from "./components/TodoList/TodoList";
import Footer from "./components/Footer/Footer";

function App() {
  const [theme, setTheme] = useState("dark");
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, text: "Complete online JavaScript course", completed: true },
          { id: 2, text: "Jog around the park 3x", completed: false },
          { id: 3, text: "10 minutes meditation", completed: false },
          { id: 4, text: "Read for 1 hour", completed: false },
          { id: 5, text: "Pick up groceries", completed: false },
        ];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const filteredTodos = todos.filter((todo) =>
    filter === "all"
      ? true
      : filter === "active"
      ? !todo.completed
      : todo.completed
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.app}>
      <div
        className={`${styles.app} ${
          theme === "light" ? styles.light : styles.dark
        }`}
        style={{
          backgroundImage: `url(${theme === "light" ? bgLight : bgDark})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 250px",
        }}
      >
        <div className={styles.container}>
          <Header theme={theme} setTheme={setTheme} />
          <Input setTodos={setTodos} />
          <TodoList todos={filteredTodos} setTodos={setTodos} />
          <Footer
            todos={todos}
            setTodos={setTodos}
            filter={filter}
            setFilter={setFilter}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
