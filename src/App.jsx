import { AppStyled } from "./AppStyled";
import { ToDoList } from "./components/ToDoList";
import { ToDoForm } from "./components/ToDoForm";

function App() {
  return (
    <AppStyled>
      <div>
        <ToDoList />
        <ToDoForm />
      </div>
    </AppStyled>
  );
}

export default App;
