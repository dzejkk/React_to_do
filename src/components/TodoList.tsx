import DeleteButton from "./DeleteButton";
import { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Buy groceries", isCompleted: false },
    { id: 2, text: "Walk the dog", isCompleted: true },
    { id: 3, text: "Read a book", isCompleted: false },
  ]);

  function handleClick(id: number) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  }

  const totalNumberOfTodos = todos.length;

  return (
    <ul>
      {todos.map((task) => (
        <li
          key={task.id}
          className="flex justify-between px-2.5 py-2.5 border-b border-black/[0.08] cursor-pointer"
          onClick={() => handleClick(task.id)}
        >
          <span
            className={`${
              task.isCompleted ? "line-through text-stone-300" : ""
            }`}
          >
            {task.text}
          </span>
          <DeleteButton setTodos={setTodos} id={task.id} />
        </li>
      ))}
    </ul>
  );
}
