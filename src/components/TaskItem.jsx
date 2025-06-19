export function TaskItem({ task, handleToggle, index, handleItemDelete }) {
  return (
    <>
      <div>
        <input
          type="checkbox"
          className="mr-2 scale-125 border-0 bg-amber-300 accent-amber-500"
          value={index}
          checked={task.completed}
          onChange={() => handleToggle(index)}
        />
        <span className={task.completed ? "line-through  " : ""}>
          {task.description}
        </span>
        <button
          className="ml-3   border-0 rounded-lg"
          onClick={() => handleItemDelete(index)}
        >
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    </>
  );
}
