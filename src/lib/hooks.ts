import { useContext } from "react";
import { TodosContext } from "../contexts/TodosCOntextProvider";

export function useTodosContext() {
  const context = useContext(TodosContext);

  if (!context) {
    throw Error("Forgot to add provider");
  }
  return context;
}
