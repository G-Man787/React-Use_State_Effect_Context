import React from "react";
import { useTheme } from "./ThemeContext.js";

function Content() {
  const { theme } = useTheme();

  return (
    <main
      style={{
        background: theme === "light" ? "#fff" : "#222",
        color: theme === "light" ? "#000" : "#eee",
        minHeight: "300px",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <p>This is a themed content area using useContext!</p>
    </main>
  );
}

export default Content;
