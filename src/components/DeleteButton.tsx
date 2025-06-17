export default function DeleteButton({ setTodos, id }) {
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={() => setTodos((prev) => prev.filter((todo) => todo.id !== id))}
      // prev is predosla hodnota ktoru nam posle react automaticky
    >
      ❌
    </button>
  );
}
