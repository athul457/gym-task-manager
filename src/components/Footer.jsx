export function Footer({ itemArray }) {
  const itemLength = itemArray.length;
  const completedTask = itemArray.filter((item) => item.completed).length;
  return (
    <>
      <div className="">
        <div className="absolute bottom-20 left-122 uppercase font-bold text-xl italic">
          you have <span className="text-red-500 text-2xl ">{itemLength}</span>{" "}
          task on your list , And{" "}
          <span className="text-red-500 text-2xl ">{completedTask}</span> where
          completd
        </div>
      </div>
    </>
  );
}
