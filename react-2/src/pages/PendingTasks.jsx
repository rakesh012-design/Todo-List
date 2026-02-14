import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodoItems } from '../store/getTodoItemsSlice'
import TodoItems from '../components/TodoItems'

const PendingTasks = () => {
  
  const store=useSelector((store)=>store.getTodoItemsStore)
  const Items=store.items.filter((item)=>item.Completed===false)
  return (
    <TodoItems Items={Items}/>
  )
}

export default PendingTasks
