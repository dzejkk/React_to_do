import DeleteButton from "./DeleteButton";

const myTasks = ["Do loundry", "Make bed", "Fix the kitchen sink"];

export default function TodoList() {
  return (
    <ul>
      {myTasks.map((task, index) => (
        <li
          key={index}
          className="flex justify-between px-2.5 py-2.5 border-b border-black/[0.08]"
        >
          <span>{task}</span>
          <DeleteButton />
        </li>
      ))}
    </ul>
  );
}
