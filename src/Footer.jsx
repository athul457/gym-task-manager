export function Footer({ itemArray }) {
  const itemLength = itemArray.length;
  const completedItem = itemArray.completed;
  return (
    <>
      <div className="absolute bottom-20 left-165">
        <h1 className="font-bold text-xl">
          you have {itemLength} items on your list and {completedItem}
        </h1>
      </div>
    </>
  );
}
