import DeleteButton from "./DeleteButton";

export default function TodoList({ todos, setTodos }) {
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
