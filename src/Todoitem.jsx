import React from "react";
import { useState } from "react";

const Todoitem = ({ id, text, dele }) => {
  const [status, setStatus] = useState(0);
  return (
    <div
      className={`${
        status ? "bg-green-400" : "bg-red-400"
      } px-4 py-2 my-2 flex justify-between`}
    >
      <span
        style={{
          textDecoration: status ? "line-through" : "none",
          fontSize: "24px",
        }}
      >
        {Number(id) + 1}
      </span>
      {/* {console.log(" ENTER" + String(id))} */}
      <p
        style={{
          textDecoration: status ? "line-through" : "none",
          fontSize: "24px",
        }}
      >
        {text}
      </p>
      <div>
        {" "}
        <button
          onClick={() => setStatus(!status)}
          className=" bg-slate-300 rounded px-3 py-1"
        >
          Done
        </button>{" "}
        <button
          className=" bg-slate-300 rounded px-3 py-1"
          onClick={() => dele(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Todoitem;
