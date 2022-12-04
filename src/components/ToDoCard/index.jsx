import { useContext } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import { Card } from "./style";

export const ToDoCard = ({ toDo }) => {
  const { removeToDo, toggleToDo } = useContext(ToDoContext);
  return (
    <Card status={toDo.status}>
      <div>
        <input onChange={() => toggleToDo(toDo.id)} type="checkbox" />
        <p>{toDo.toDo}</p>
        <button onClick={() => removeToDo(toDo.id)}>Excluir</button>
      </div>
    </Card>
  );
};
