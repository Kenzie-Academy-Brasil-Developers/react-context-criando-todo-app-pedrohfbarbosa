import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { ToDoContext } from "../../providers/ToDoProvider";
import { FormStyled } from "./style";

export const ToDoForm = () => {
  const { toDoList, addToDo } = useContext(ToDoContext);

  const formSchema = yup.object().shape({
    toDo: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(formSchema),
  });

  const handleForm = (data) => {
    const newId =
      toDoList.length > 0 ? toDoList[toDoList.length - 1].id + 1 : 0;
    const newObj = { ...data, id: newId, status: false };

    addToDo(newObj);
  };

  return (
    <FormStyled onSubmit={handleSubmit(handleForm)}>
      <fieldset>
        <input
          type="text"
          placeholder="Digite uma tarefa"
          {...register("toDo")}
        />
        <button type="submit">Adicionar</button>
      </fieldset>
      {errors.toDo && <span>{errors.toDo.message}</span>}
    </FormStyled>
  );
};
