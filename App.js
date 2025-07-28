
import React from "react";
import { ThemeProvider } from "./components/ThemeContext.js";
import Header from "./components/Header.js";
import Content from "./components/Content";

function App() {
  return (
    <ThemeProvider>
      <div>
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;
