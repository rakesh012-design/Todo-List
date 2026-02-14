import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import { fetchTodoItems } from './store/getTodoItemsSlice'
import { useEffect } from 'react'
import {loadIcon,Icon} from '@iconify/react'
import TodoItems from './components/TodoItems'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import RouteLayout from './Routing/RouteLayout'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
 
  return (
    <RouteLayout />

    /*{<div className='h-screen w-screen gap-10 flex flex-col'>
    <Header />
   <div className='flex items-center flex-col  justify-center'>
    <TodoItems />
 </div>
 </div>}*/
 
  )

}

export default App
