import React, { memo } from "react";

const TodoItem = memo(({ item, onToggle }) => {
  //console.log("Rendering item:", item._id); // Helps debug

  return (
    <div
      className={`flex justify-around mt-4 p-2 ${
        item.Completed ? "bg-green-500" : "bg-white"
      } hover:z-10 hover:shadow-2xl transition-transform duration-200 ease-out hover:-translate-y-1`}
    >
      <div className="flex-2 text-center">{item.date}</div>
      <div className="flex-2 text-center">{item.task}</div>
      <input
        type="radio"
        checked={item.Completed}
        onClick={() => onToggle(item._id)}
      />
    </div>
  );
});

export default TodoItem;
