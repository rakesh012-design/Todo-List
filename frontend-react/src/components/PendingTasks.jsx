import React, { useEffect, useState } from 'react'
import { getTodoItems } from '../services/services'
import {MdDelete} from 'react-icons/md'
import { ToastContainer,toast } from 'react-toastify'

const PendingTasks = () => {

  const [pendingTasks,setPendingTasks]=useState([])
  
    useEffect(()=>{
      const fetchCompletedTasks= async()=>{
        try{
        let data=await getTodoItems()
        if(!data.todoItems){
          toast.error(data.message)
          return 
        }
        const tasks=data.todoItems.filter((d)=>d.Completed===false)
        setPendingTasks(tasks)
        }catch(e){
          console.log(e)
        }
      }
      fetchCompletedTasks()
    },[]
  )
  
  return (
    <div className='flex justify-center items-center w-screen' >
      <ToastContainer position='top-right' autoClose={3000}/>
    <div className='mt-20 flex flex-col justify-center align-middle w-1/2' >
    {pendingTasks.length>0 ? pendingTasks.map((item,idx)=>
    <div className=
    {`flex justify-around mt-4 justify-items-center p-2 ${item.Completed ? "bg-green-500" : "bg-white"}
    hover:z-10 hover:shadow-2xl transition-transform duration-200 ease-out hover:-translate-y-1`} key={idx}>
    <div className='flex-2 text-center'>{item.date}</div>
    <div className='flex-2 text-center'>{item.task}</div>
    <input className='text-center' type='radio' checked={item.Completed} onChange={()=>{console.log('changed')}}/>
    <button className='flex flex-row hover:cursor-pointer'><MdDelete size={40} color='red'/></button>
    </div>)
    : <h1>Nope</h1>}
    </div>
    </div>
  
  )
}

export default PendingTasks