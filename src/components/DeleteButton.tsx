export default function DeleteButton({ setTodos, id }) {
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={(e) => {
        e.stopPropagation(); //to stop bubling click event up to the tree
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
      }}
    >
      ❌
    </button>
  );
}
