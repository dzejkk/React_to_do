import AddTodoForm from "./AddTodoForm";

export default function SideBar() {
  return (
    <section className="col-[2/3] row-[2/3] bg-stone-50 border-l border-black/[0.08] px-2 py-2">
      <AddTodoForm />
    </section>
  );
}
