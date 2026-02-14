import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Header from '../components/Header'
import TodoItems from '../components/TodoItems'
import Login from '../pages/Login'
import PendingTasks from '../pages/PendingTasks'
import { useSelector,useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchTodoItems } from '../store/getTodoItemsSlice'
import CompletedTasks from '../pages/CompletedTasks'

const RouteLayout = () => {
  const store=useSelector((store)=>store.getTodoItemsStore)
  const dispatch=useDispatch()
  const Items=store.items
  useEffect(()=>{
      if(Items.length===0){
      dispatch(fetchTodoItems())
      }
  },[])

  return (
    <Routes>
      <Route path='/' element={<Login />} />

      <Route path='/home' element={<Header />}>
        <Route index element={<TodoItems/>} />
        <Route path='all-tasks' element={<TodoItems Items={Items} />} />
        <Route path='pending-tasks' element={<PendingTasks />}/>
        <Route path='completed-tasks' element={<CompletedTasks />} />
      </Route>
    </Routes>
  )
}

export default RouteLayout
