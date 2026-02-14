import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodoItems } from '../store/getTodoItemsSlice'
import Item from './Item'
import AddItem from './AddItem'
import {AiOutlineLoading} from 'react-icons/ai'

const TodoItems = ({Items}) => {
  const store=useSelector((store)=>store.getTodoItemsStore)
  const status=store.status
  return (
    <div className='flex justify-center flex-col items-center w-1/2 h-1/2 content-center'>
      <AddItem />
    {status==='loading' ? <AiOutlineLoading className='animate-spin' size={100}/> : 
    Items  ? Items.map((item,idx)=>{
       return (
        <div className="card rounded-3 w-full">
       <div class="card-body p-4">
        <ul class="list-group rounded-0"><Item key={idx} item={item}/> </ul>
      </div>
      </div>
      )
      }) : <h1>No Items</h1>}
    </div>
  )
}

export default TodoItems
