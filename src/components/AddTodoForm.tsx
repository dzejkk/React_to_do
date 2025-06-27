import Button from "./Button";
import { useState } from "react";

type AddTodoFormProps = {
  handleAddTodo: (todoText: string) => void;
};

export default function AddTodoForm({ handleAddTodo }: AddTodoFormProps) {
  const [todoText, setTodoText] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleAddTodo(todoText);
        setTodoText("");
      }}
    >
      <h1 className="font-medium text-slate-950">Add a todo</h1>
      <label htmlFor="todoInput" className="sr-only">
        Enter todo item
      </label>
      <input
        id="todoInput"
        type="text"
        placeholder="Enter todo item"
        className="h-10 border border-black/[12%] 
                   rounded-[5px] block my-2 text-[1.25rem]
                   w-full px-1.5"
        value={todoText}
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
      />
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
}
