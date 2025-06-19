import { useState } from "react";
import "./index.css";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Header } from "./Header";

function App() {
  const [task, setTask] = useState({
    description: "",
  });

  const [itemArray, setItemArray] = useState([]);

  function addTaskToItemArray(task) {
    setItemArray((itemArray) => [...itemArray, task]);
  }

  function handleOnchange(e) {
    const { name, value } = e.target;
    setTask((task) => ({ ...task, [name]: value }));
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!task.description) return;
    addTaskToItemArray(task);
    setTask({
      description: "",
    });
  }
  return (
    <div className="bg-green-50 w-full h-screen flex justify-center ">
      <div className="bg-amber-200 w-[1050px] h-[650px] mt-10 border-0 rounded-xl shadow-lg shadow-amber-300">
        <Header />
        <Form
          handleSubmitForm={handleSubmitForm}
          task={task}
          handleOnchange={handleOnchange}
        />
        <TaskList itemArray={itemArray} />
        <Footer />
      </div>
    </div>
  );
}

function TaskList({ itemArray }) {
  return (
    <>
      <div className="list-none grid grid-cols-4 items-center justify-between gap-7  w-[700px] h-auto ml-45 mt-10 text-center">
        {itemArray.map((task, index) => (
          <ul>
            <li key={index} className="bg-red-500 p-2 text-xl">
              <TaskItem task={task} />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

function TaskItem({ task }) {
  return (
    <>
      <div>
        {task.description}{" "}
        <input
          type="checkbox"
          className="ml-2 scale-125 border-0 bg-amber-300 accent-amber-500"
        />
      </div>
    </>
  );
}
export default App;
