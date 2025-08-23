import DeleteButton from "./DeleteButton";
import useSounds from "../hooks/useSounds.ts";

import { useTodosContext } from "../lib/hooks";

export default function TodoList() {
  const { todos, handleToggleTodo, handleDeleteTodo } = useTodosContext();
  const { playFullfiledClick } = useSounds();

  return (
    <ul>
      {todos.length === 0 && (
        <li className="h-full flex justify-center items-center font-semibold">
          start by adding to do
        </li>
      )}

      {todos.map((task) => (
        <li
          key={task.id}
          className="flex justify-between px-2.5 py-2.5 border-b border-black/[0.08] cursor-pointer"
          onClick={() => {
            handleToggleTodo(task.id);
            playFullfiledClick();
          }}
        >
          <span
            className={`${
              task.isCompleted ? "line-through text-stone-300" : ""
            }`}
          >
            {task.text}
          </span>
          <DeleteButton id={task.id} handleDeleteTodo={handleDeleteTodo} />
        </li>
      ))}
    </ul>
  );
}
