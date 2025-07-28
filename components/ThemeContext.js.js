import React, { createContext, useContext, useState } from "react";

// Create context
const ThemeContext = createContext();

// Context Provider component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook to use the context
export const useTheme = () => useContext(ThemeContext);
