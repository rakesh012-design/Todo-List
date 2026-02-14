import React from 'react'
import { useSelector } from 'react-redux'
import TodoItems from '../components/TodoItems'

const CompletedTasks = () => {
  const store=useSelector((store)=>store.getTodoItemsStore)
  const Items=store.items.filter((item)=>item.Completed===true)
  return (
    <TodoItems Items={Items}/>
  )
}

export default CompletedTasks
