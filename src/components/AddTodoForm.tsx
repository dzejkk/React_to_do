import Button from "./Button";

export default function AddTodoForm() {
  return (
    <form action="">
      <h1 className="font-medium text-slate-950">Add a todo</h1>
      <label htmlFor="todoInput" className="sr-only">
        Enter todo item
      </label>
      <input
        id="todoInput"
        type="text"
        placeholder="Enter todo item"
        className="h-10 border border-black/[12%] 
                   rounded-[5px] block my-2 text-[1.25rem]
                   w-full px-1.5"
      />
      <Button buttonType="primary">Add to list</Button>
    </form>
  );
}
