import { createContext, useState } from "react";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [toDoList, setToDoList] = useState([]);

  const addToDo = (item) => {
    setToDoList([...toDoList, item]);
  };

  const removeToDo = (id) => {
    const newList = toDoList.filter((e) => e.id !== id);

    setToDoList(newList);
  };

  const toggleToDo = (id) => {
    const newList = toDoList.map((e) => {
      if (e.id === id) {
        return { ...e, status: !e.status };
      } else {
        return e;
      }
    });

    setToDoList(newList);
  };

  return (
    <ToDoContext.Provider value={{ toDoList, addToDo, removeToDo, toggleToDo }}>
      {children}
    </ToDoContext.Provider>
  );
};
