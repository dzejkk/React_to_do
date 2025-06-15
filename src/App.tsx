function App() {
  return (
    <div className="flex justify-center items-center font-main bg-orange-100 h-screen">
      <h1
        className="text-9xl font-bold uppercase
                 text-neutral-900 opacity-10
                  text-center absolute tracking-[0.2em]"
      >
        TodoApp
      </h1>

      <main
        className=" relative container max-w-4xl
                         mx-auto h-[40rem] bg-white
                         rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
                         grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr]"
      >
        <header className="col-[1/3] row-[1/2] bg-stone-100"></header>
        <ul></ul>
        <section className="col-[2/3] row-[2/3] bg-stone-50 border-l border-black/[0.08]"></section>
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
