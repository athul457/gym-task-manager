export function Footer({ itemArray }) {
  const itemLength = itemArray.length;
  const completedItem = itemArray.filter((item) => item.completed).length;
  const completePercentage =
    itemLength === 0 ? 0 : Math.round((completedItem / itemLength) * 100);
  return (
    <>
      <div className="absolute bottom-20 left-135">
        <div className="font-bold text-xl text-red-500">
          <span className="italic text-black">you have</span> {itemLength}{" "}
          <span className="italic text-black">items on your list and</span>{" "}
          {completedItem}{" "}
          <span className="mr-2 italic text-black">completed</span>
          {completePercentage} %
        </div>
      </div>
    </>
  );
}
