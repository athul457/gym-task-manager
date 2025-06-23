import { useState } from "react";
import "./index.css";
import { Footer } from "./Footer";
import { Form } from "./Form";
import { Header } from "./Header";

function App() {
  const [task, setTask] = useState({
    description: "",
    completed: false,
  });

  const [itemArray, setItemArray] = useState([]);

  function handleCompleted(index) {
    setItemArray((prevItem) =>
      prevItem.map((newItem, i) =>
        i === index ? { ...newItem, completed: !newItem.completed } : newItem
      )
    );
  }

  function handleOnchange(e) {
    const { name, value } = e.target;
    setTask((task) => ({ ...task, [name]: value }));
  }

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!task.description) return;
    setItemArray((itemArray) => [...itemArray, task]);
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
        <TaskList itemArray={itemArray} handleCompleted={handleCompleted} />
        <Footer />
      </div>
    </div>
  );
}

function TaskList({ itemArray, handleCompleted }) {
  return (
    <>
      <div className="list-none grid grid-cols-4 items-center justify-between gap-7  w-[700px] h-auto ml-45 mt-10 text-center">
        {itemArray.map((task, index) => (
          <ul>
            <li key={index} className="bg-red-500 p-2 text-xl">
              <TaskItem
                task={task}
                handleCompleted={handleCompleted}
                index={index}
              />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

function TaskItem({ task, handleCompleted, index }) {
  return (
    <>
      <div>
        <input
          type="checkbox"
          className="mr-2 scale-125 border-0 bg-amber-300 accent-amber-500"
          onClick={handleCompleted}
        />
        {
          <span className={task.completed ? "line-through" : ""}>
            {task.description}
          </span>
        }
      </div>
    </>
  );
}
export default App;
