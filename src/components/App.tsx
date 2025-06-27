import { useState } from "react";
import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import SideBar from "./SideBar";
import TodoList from "./TodoList";

type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (todoText: string) => {
    if (todoText === "") {
      alert("u must write todo");
      return;
    }
    if (todos.length >= 3) {
      alert("log in to add more todos");
      return;
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodo = (id: number) => {
    //to stop bubling click event up to the tree
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

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
        <Header todos={todos} />

        <TodoList
          todos={todos}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />

        <SideBar todos={todos} handleAddTodo={handleAddTodo} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
