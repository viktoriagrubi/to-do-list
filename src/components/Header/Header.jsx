import styles from "./Header.module.css";
import iconSun from "../../assets/images/icon-sun.svg";
import iconMoon from "../../assets/images/icon-moon.svg";

function Header({ theme, setTheme }) {
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <header className={styles.header}>
      <h1>TODO</h1>
      <button onClick={toggleTheme} className={styles.themeToggle}>
        <img
          src={theme === "light" ? iconMoon : iconSun}
          alt={
            theme === "light" ? "Switch to dark mode" : "Switch to light mode"
          }
        />
      </button>
    </header>
  );
}

export default Header;
