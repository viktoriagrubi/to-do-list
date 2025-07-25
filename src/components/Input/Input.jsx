import { useState } from "react";
import styles from "./Input.module.css";

function Input({ setTodos }) {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (text.trim()) {
      setTodos((prev) => [
        ...prev,
        {
          id: Date.now(),
          text,
          completed: false,
        },
      ]);
      setText("");
    }
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Currently typing"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
    </div>
  );
}

export default Input;
