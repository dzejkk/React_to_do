import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContextProvider";
import useSounds from "../hooks/useSounds.ts";

type DeleteButtonProps = {
  id: number;
  handleDeleteTodo: (id: number) => void;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  const todosContext = useContext(TodosContext);
  if (!todosContext) {
    throw new Error("TodosContext is not available");
  }
  const { handleDeleteTodo } = todosContext;
  const { playDeleteClick } = useSounds();

  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteTodo(id);
        playDeleteClick(); //to stop bubbling click event up to the tree
      }}
    >
      ❌
    </button>
  );
}
