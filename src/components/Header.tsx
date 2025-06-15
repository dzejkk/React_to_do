export default function Header() {
  return (
    <header
      className="flex justify-between items-center
                       col-[1/3] row-[1/2] bg-stone-100
                       px-6"
    >
      <div className="flex gap-1">
        <div className="bg-slate-400 w-[16px] h-[16px] rounded-full"></div>
        <div className="bg-orange-400 w-[16px] h-[16px] rounded-full"></div>
        <div className="bg-green-400 w-[16px] h-[16px] rounded-full"></div>
      </div>

      <div>
        <b>0</b> / 0 todos completed
      </div>
    </header>
  );
}
