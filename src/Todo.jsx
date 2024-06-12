import React, { useState } from "react";
// import { useState } from "react";
import Todoitem from "./Todoitem";
const Todo = () => {
  const [item, setItem] = useState([]);
  const [description, setDescription] = useState("");
  function handleChange(e) {
    setDescription(e.target.value);
    console.log(e.target.value);
  }
  function handleAdd() {
    if (description) {
      const newItem = { id: item.length, description, status: "pending" };
      console.log(newItem);

      setItem((item) => [...item, newItem]);

      setDescription("");
    }
  }

  function deleteItem(id) {
    console.log("del called on " + String(id));
    setItem((item) => item.filter((obj) => obj.id != id));
  }
  return (
    <div className="w-[500px] h-[500px] bg-slate-300 rounded-md mx-auto mt-8 px-3 py-2 ">
      <div>
        <input
          type="text"
          style={{
            backgroundColor: "#white",
            width: "80%",
            height: "40px",
            margin: "9px 9px",
          }}
          placeholder="Enter your task . . ."
          value={description}
          onChange={handleChange}
        />
        <button
          style={{
            backgroundColor: "#b690ef",
            width: "16%",
            height: "40px",
            // margin: "12px 14px",
          }}
          onClick={(e) => handleAdd(e)}
        >
          ADD
        </button>
      </div>
      {item.map((dataItem) => (
        <Todoitem
          key={dataItem.id}
          id={dataItem.id}
          text={dataItem.description}
          dele={deleteItem}
        />
      ))}
    </div>
  );
};

export default Todo;
