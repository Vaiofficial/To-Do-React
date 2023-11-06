"use client"
import { useState } from 'react'

export default function Home() {

    const [title, setTitle] = useState("");  
    const [desc, setDesc] = useState("");

    const submitHandler = (e)=>{
      e.preventDefault();
      console.log(title)
      console.log(desc)
      setTitle("")
      setDesc("")
    }

  return (
    <>
      <header className='bg-black w-full h-24'>
          <h2 className='text-white  text-5xl font-bold text-center p-6'>My To Do List</h2>
      </header>

    <form onSubmit={submitHandler}>
        <input className=' bg-white px-4 py-2 border-zinc-800 border-4 text-2xl m-8' placeholder='Enter the Task' type='text' value={title} onChange={(e)=>{setTitle(e.target.value)}}/>
        <input className=' bg-white px-4 py-2 border-zinc-800 border-4 text-2xl m-8' placeholder='Enter Task Description' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
        <button className='bg-green-700 rounded-md text-white font-bold text-2xl px-3 py-3 m-5'>Add Task</button>
    </form>
    </>

  )
}
