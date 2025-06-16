import AddTodoForm from "./AddTodoForm";
import Button from "./Button";

export default function SideBar() {
  return (
    <section
      className="col-[2/3] row-[2/3] bg-stone-50 border-l
                      border-black/[0.08] px-2 py-2 flex flex-col"
    >
      <AddTodoForm />

      <div className="mt-auto">
        <Button buttonType="secondary">log in</Button>
        <Button buttonType="secondary">Register</Button>
      </div>
    </section>
  );
}
