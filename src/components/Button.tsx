type ButtonProps = {
  buttonType?: "primary" | "secondary";
  children: React.ReactNode;
};

export default function Button({ buttonType, children }: ButtonProps) {
  return (
    <button
      type="submit"
      className={`h-10 bg-stone-600 text-white cursor-pointer w-full rounded-[5px]
        hover:bg-amber-900 mb-1 ${
          buttonType === "secondary" ? "opacity-[85%]" : ""
        }`}
    >
      {children}
    </button>
  );
}
