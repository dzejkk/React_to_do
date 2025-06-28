import { useTodosContext } from "../lib/hooks";

export default function Counter() {
  const { numberOfCompletedTodos, totalNumbersOfTodos } = useTodosContext();

  return (
    <div
      className="flex justify-center items-center h-16 bg-gray-100 border-b
                 border-black/[0.08] cursor-pointer"
    >
      <b>{numberOfCompletedTodos}</b> / {totalNumbersOfTodos} todos completed
    </div>
  );
}
