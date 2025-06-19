import { TaskItem } from "./TaskItem";

export function TaskList({ itemArray, handleToggle, handleItemDelete }) {
  return (
    <>
      <div className="list-none grid grid-cols-4 items-center justify-between gap-7  w-[700px] h-auto ml-45 mt-10 text-center">
        {itemArray.map((task, index) => (
          <ul>
            <li
              key={index}
              className="bg-red-200 p-2 text-md border-0 rounded-lg uppercase font-bold text-red-600 italic"
            >
              <TaskItem
                task={task}
                handleToggle={handleToggle}
                index={index}
                handleItemDelete={handleItemDelete}
              />
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}
