import React, { useEffect, useMemo, useRef, useState } from 'react'
import {getTodoItems,updateTodoItem,deleteTodoItem,addTodoItem, searchTodoItems} from '../services/services'
import {ToastContainer,toast} from 'react-toastify'
import {jwtDecode} from "jwt-decode";
import {MdDelete,MdAddBox} from 'react-icons/md'
import {useNavigate} from 'react-router-dom'

const AllTasks = () => {


  let [todoItems,setTodoItems]=useState([])
  const addTaskRef=useRef()
  const addDateRef=useRef()
  const searchRef=useRef()
  const navigate=useNavigate()

  const handleAddItem=async()=>{
    const task=addTaskRef.current.value
    const date=addDateRef.current.value.toLocaleString().split('T')[0]  
    console.log(date,'from front end')
    const res=await addTodoItem({task,date})
    //const data=await res.json()
    if(res.success){
      toast.success(res.message)
    }else{
      toast.error(res.message)
    }
  }

  useEffect(()=>{
    const fetchTodos=async()=>{
      try{
        const data=await getTodoItems()
        if(data.success===false){
          const token=localStorage.getItem('token')
          if (token){
            localStorage.removeItem('token')
          }
          navigate('/')
        }
        setTodoItems(data.todoItems)
      }catch(e){
        console.log(e)
      }
    }
    fetchTodos()
  },[])

  const handleSearchTodoItem=async()=>{
    const value=searchRef.current.value
    const data=await searchTodoItems({value})
    console.log(data)
    if(data.success && data['data'].length>0){
      setTodoItems(data.data)
    }
  }



  return (
    <div className='flex justify-center items-center w-screen' >
      <ToastContainer position='top-right' autoClose={3000}/>
        <div className='mt-20 flex flex-col justify-center align-middle w-1/2' >
         <input className='text-center border-2 w-1/2'  type='text' placeholder='Search' onChange={handleSearchTodoItem} ref={searchRef}></input>
        <div className="flex justify-around mt-4 justify-items-center p-2 bg-white gap-2">
          <input className='flex-2 text-center border-2'  type='text' placeholder='Please enter your task' ref={addTaskRef}></input>
          <input  type='date' placeholder='Please select date' ref={addDateRef}></input>
          <button className='flex flex-row hover:cursor-pointer' 
          onClick={handleAddItem}
          ><MdAddBox size={40} color='green'/></button>
          </div>
       
        {todoItems.length>0 ? todoItems.map((item,idx)=>
        <div className=
        {`flex justify-around mt-4 justify-items-center p-2 ${item.Completed ? "bg-green-500" : "bg-white"}
        hover:z-10 hover:shadow-2xl transition-transform duration-200 ease-out hover:-translate-y-1`} key={idx}>
          <div className='flex-2 text-center'>{item.date.split('T')[0]}</div>
          <div className='flex-2 text-center'>{item.task}</div>
          <input className='text-center' type='radio' checked={item.Completed} onChange={()=>{
            toast.success('item updated')
          }}
          onClick={async()=>{
            const updatedItem=await updateTodoItem(item._id)
            setTodoItems((prev)=>{
              return prev.map((prevItem)=>prevItem._id===item._id ? updatedItem : prevItem)
            })
            
            }}/>
          <button className='flex flex-row hover:cursor-pointer' 
          onClick={()=>{
            deleteTodoItem(item._id)
            toast.success('Task deleted please refresh')
          }}
          ><MdDelete size={40} color='red'/></button>
          </div>)
        : <h1>Nope</h1>}
        </div>
        </div>

  )
}

export default AllTasks