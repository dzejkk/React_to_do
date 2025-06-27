type DeleteButtonProps = {
  id: number;
  handleDeleteTodo: (id: number) => void;
};

export default function DeleteButton({
  id,
  handleDeleteTodo,
}: DeleteButtonProps) {
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
