import Counter from "./Counter";
import Logo from "./Logo";

export default function Header() {
  return (
    <header
      className="flex justify-between items-center
                       col-[1/3] row-[1/2] bg-stone-100
                       px-6"
    >
      <Logo />
      <Counter />
    </header>
  );
}
