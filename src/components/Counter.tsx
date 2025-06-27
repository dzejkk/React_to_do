import { useState } from "react";

type CounterProps = {
  totalNumbersOfTodos: number;
  numberOfCompletedTodos: number;
};

export default function Counter({
  totalNumbersOfTodos,
  numberOfCompletedTodos,
}: CounterProps) {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => setCount(count + 1)}
      className="flex justify-center items-center h-16 bg-gray-100 border-b
                 border-black/[0.08] cursor-pointer"
    >
      <b>{numberOfCompletedTodos}</b> / {totalNumbersOfTodos} todos completed
    </div>
  );
}
