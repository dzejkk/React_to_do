import Counter from "./Counter";
import Logo from "./Logo";

type HeaderProps = {
  totalNumbersOfTodos: number;
  numberOfCompletedTodos: number;
};

export default function Header({
  numberOfCompletedTodos,
  totalNumbersOfTodos,
}: HeaderProps) {
  return (
    <header
      className="flex justify-between items-center
                       col-[1/3] row-[1/2] bg-stone-100
                       px-6"
    >
      <Logo />
      <Counter
        totalNumbersOfTodos={totalNumbersOfTodos}
        numberOfCompletedTodos={numberOfCompletedTodos}
      />
    </header>
  );
}
