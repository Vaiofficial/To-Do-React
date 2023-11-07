"use client";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]); //array to store our task details.

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]); //... spread operator to store the previous tasks also. it expand the object.

    setTitle(""); //click karne par submit ke baad! input khali ho jyga.
    setDesc("");
    console.log(mainTask);
  };

  //DELETE TASK FUNCTION

  const deleteTask = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2>There is No Tasks</h2>;

  //iterating main task object/array
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      //map is used to iterate the object , i parameter is for index and t parameter is for value at that index.
      return (
        <li className="flex items-center justify-between mb-8" key={i}>
          <div className="flex justify-between mb-5 w-2/3">
            <h2 className="font-semibold text-2xl">{t.title}</h2>
            <p className="text-xl">{t.desc}</p>
            <button
              className="bg-red-500 rounded-md text-white px-4 py-2 font-bold"
              onClick={() => {
                deleteTask(i);
              }}
            >
              Delete
            </button>
          </div>
        </li>
      );
    });
  }

  return (
    <>
      <header className="bg-black w-full h-24">
        <h2 className="text-white  text-5xl font-bold text-center p-6">
          My To Do List
        </h2>
      </header>

      <form onSubmit={submitHandler}>
        <input
          className=" bg-white px-4 py-2 border-zinc-800 border-4 text-2xl m-8"
          placeholder="Enter the Task"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          className=" bg-white px-4 py-2 border-zinc-800 border-4 text-2xl m-8"
          placeholder="Enter Task Description"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />
        <button className="bg-green-700 rounded-md text-white font-bold text-2xl px-3 py-3 m-5">
          Add Task
        </button>
      </form>

      <hr></hr>

      <div className="bg-gray-300 p-8">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
}
