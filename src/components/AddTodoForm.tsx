import Button from "./Button";

export default function AddTodoForm() {
  return (
    <form action="">
      <h1 className="font-medium text-slate-950">Add a todo</h1>
      <input
        type="text"
        className="h-10 border border-black/[12%] 
                   rounded-[5px] block my-2 text-[1.25rem]
                   w-full px-1.5"
      />
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
}
