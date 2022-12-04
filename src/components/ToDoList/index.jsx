import { useContext } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import { ToDoCard } from "../ToDoCard";
import { Wrapper } from "./style";

export const ToDoList = () => {
  const { toDoList } = useContext(ToDoContext);

  return (
    <Wrapper>
      <h2>Lista de tarefas</h2>
      {toDoList.length > 0 ? (
        <ul>
          {toDoList.map((e) => (
            <ToDoCard key={e.id} toDo={e} />
          ))}
        </ul>
      ) : (
        <p>Lista vazia</p>
      )}
    </Wrapper>
  );
};
