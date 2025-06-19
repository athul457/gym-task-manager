import { useState } from "react";
import "./index.css";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { TaskList } from "./components/TaskList";

function App() {
  const [task, setTask] = useState({
    description: "",
    completed: false,
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

  // function handleToggle(index) {
  //   setItemArray((prevArray) =>
  //     prevArray.map((newArray, ind) =>
  //       ind === index
  //         ? { ...newArray, completed: !newArray.completed }
  //         : newArray
  //     )
  //   );
  // }

  function handleToggle(index) {
    setItemArray((itemArray) =>
      itemArray.map((newItemsArray, ind) =>
        ind === index
          ? { ...newItemsArray, completed: !newItemsArray.completed }
          : newItemsArray
      )
    );
  }

  function handleItemDelete(index) {
    setItemArray((prevTask) =>
      prevTask.filter((newTask, ind) => ind !== index)
    );
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
        <TaskList
          itemArray={itemArray}
          handleToggle={handleToggle}
          handleItemDelete={handleItemDelete}
        />
        <Footer itemArray={itemArray} />
      </div>
    </div>
  );
}

export default App;
