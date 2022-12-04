import { ThemeProvider } from "styled-components";
import { AppStyled } from "./AppStyled";
import { ToDoList } from "./components/ToDoList";
import { ToDoForm } from "./components/ToDoForm";
import { useState } from "react";
import { themes } from "./styles/theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <ThemeProvider theme={darkMode ? themes.dark : themes.light}>
        <AppStyled>
          <div>
            <button onClick={handleDarkMode}>
              {darkMode ? "Light-mode" : "Dark-mode"}
            </button>
            <ToDoList />
            <ToDoForm />
          </div>
        </AppStyled>
      </ThemeProvider>
    </>
  );
}

export default App;
