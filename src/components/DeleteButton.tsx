export default function DeleteButton({ setTodos, id, handleDeleteTodo }) {
  return (
    <button
      type="button"
      className="cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        handleDeleteTodo(id); //to stop bubling click event up to the tree
      }}
    >
      ❌
    </button>
  );
}
