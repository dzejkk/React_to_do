import { useContext } from "react";
import { TodosContext } from "../contexts/TodosCOntextProvider";

type DeleteButtonProps = {
  id: number;
};

export default function DeleteButton({ id }: DeleteButtonProps) {
  const { handleDeleteTodo } = useContext(TodosContext);

  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteTodo(id); //to stop bubbling click event up to the tree
      }}
    >
      ❌
    </button>
  );
}
