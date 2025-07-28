import React from "react";
import { useTheme } from "./ThemeContext.js";

function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header
      style={{
        background: theme === "light" ? "#eee" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <h1>Theme Switcher</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === "light" ? "🌙 Dark" : "🌞 Light"} Mode
      </button>
    </header>
  );
}

export default Header;
