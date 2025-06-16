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
      <button
        type="button"
        className="h-10 bg-stone-600 text-white cursor-pointer w-full rounded-[5px]
        hover:bg-amber-900"
      >
        Add to list
      </button>
    </form>
  );
}
