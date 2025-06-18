import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import TodoList from "./TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="flex flex-col justify-center items-center font-main bg-orange-100 h-screen">
      <BackgroundHeading />

      <main
        className=" relative container max-w-4xl
                         mx-auto h-[40rem] bg-white
                         rounded-[12px] shadow-[0_4px_4px_rgba(0,0,0,0.08)]
                         grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] border-b
                        border-black/[0.08] overflow-hidden"
      >
        <Header todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} setTodos={setTodos} />

        <SideBar todos={todos} setTodos={setTodos} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
