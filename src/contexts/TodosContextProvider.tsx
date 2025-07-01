import { createContext, useEffect, useState } from "react";
import type { Todo } from "../lib/types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TTodosContex = {
  todos: Todo[];
  totalNumbersOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleToggleTodo: (id: number) => void;
  handleDeleteTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContex | null>(null);

type TodosContextProviderProps = {
  children: React.ReactNode;
};

// get todos from local storage
const getTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else {
    return [];
  }
};

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  // auth
  const { isAuthenticated } = useKindeAuth();
  //auth
  const [todos, setTodos] = useState<Todo[]>(getTodos);

  // derived state
  const totalNumbersOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  // event handlers
  const handleAddTodo = (todoText: string) => {
    if (todoText === "") {
      alert("u must write todo");
      return;
    }
    if (todos.length >= 3 && !isAuthenticated) {
      alert("log in to add more todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    //to stop bubling click event up to the tree
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  //side efects

  //add todos to local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumbersOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
