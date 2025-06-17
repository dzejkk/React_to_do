import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      onClick={() => setCount(count + 1)}
      className="flex justify-center items-center h-16 bg-gray-100 border-b border-black/[0.08] cursor-pointer"
    >
      <b>{count}</b> / 0 todos completed
    </div>
  );
}
