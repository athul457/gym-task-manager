export function Form({ handleSubmitForm, handleOnchange, task }) {
  return (
    <>
      <div className="bg-amber-100 w-[700px] h-[90px]  mt-[40px] ml-45 border-0 rounded-xl shadow-amber-200 shadow-lg">
        <form className="text-center items-center " onSubmit={handleSubmitForm}>
          <label htmlFor=""></label>
          <input
            className="w-[300px] h-[40px] border-0 rounded-lg mt-7 p-4 bg-green-50 hover:outline-1 hover:bg-green-100 transform ease-in-out duration-150"
            type="text"
            placeholder="enter daily tasks...."
            value={task.description}
            name="description"
            onChange={handleOnchange}
          />
          <button className="ml-3 p-2 border-0 rounded-lg bg-green-300 hover:bg-green-500 transform duration-300 ease-in-out cursor-pointer shadow-sm shadow-green-300">
            Add
          </button>
        </form>
      </div>
    </>
  );
}
