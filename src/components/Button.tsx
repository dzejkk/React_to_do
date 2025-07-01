type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
  onClick: () => Promise<void>;
};

export default function Button({ buttonType, children, onClick }: ButtonProps) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className={`h-10 bg-stone-600 text-white cursor-pointer w-full rounded-[5px]
        hover:bg-amber-900 mb-1 ${
          buttonType === "secondary" ? "opacity-[85%]" : ""
        }`}
    >
      {children}
    </button>
  );
}
