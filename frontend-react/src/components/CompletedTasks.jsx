import React, { useEffect, useState } from 'react'
import { getTodoItems } from '../services/services'
import {MdDelete} from 'react-icons/md'

const CompletedTasks = () => {

  const [completedTasks,setCompletedTasks]=useState([])

  useEffect(()=>{
    const fetchCompletedTasks= async()=>{
      try{
      let data=await getTodoItems()
      const tasks=data.todoItems.filter((d)=>d.Completed===true)
      setCompletedTasks(tasks)
      }catch(e){
        console.log(e)
      }
    }
    fetchCompletedTasks()
  },[])
  return (
     <div className='flex justify-center items-center w-screen' >
      <div className='mt-20 flex flex-col justify-center align-middle w-1/2' >
      {completedTasks.length>0 ? completedTasks.map((item,idx)=>
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

export default CompletedTasks