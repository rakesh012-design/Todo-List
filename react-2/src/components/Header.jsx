import React from 'react'
import {Link, Outlet,useNavigate} from 'react-router-dom'
import { logout } from '../store/userStore'
import {useDispatch} from 'react-redux'
const Header = () => {
  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleLogout=async()=>{
    const res=await dispatch(logout())
    if(res.payload.success){
      navigate('/')
    }
  }


  return (
    /*<div className='flex flex-col gap-10'>
    <div className='flex justify-evenly w-full relative mt-2 border-2 border-red-500 p-2'>
      <Link to={'/pending-tasks'}><button className='bg-amber-500 hover:cursor-pointer p-4 hover:bg-amber-700 rounded'><h1>Pending Tasks</h1></button></Link>
      <Link to={'/'}><button className='bg-amber-500 hover:cursor-pointer p-4 hover:bg-amber-700 rounded'  ><h1>All Tasks</h1></button></Link>
      <Link to={'/completed-Tasks'}><button className='bg-amber-500 hover:cursor-pointer p-4 hover:bg-amber-700 rounded'><h1>Completed Tasks</h1></button></Link>
      
    </div>
    <div className='flex justify-center items-center'>
    <Outlet />
    </div>
    </div>*/
    <div className="flex flex-col gap-10">
      <div className="flex justify-center relative mt-2" >
        <nav class="navbar navbar-light bg-blue-100 w-full flex">
          <form class="form-inline w-full flex justify-evenly">
            <Link to={'/home/pending-tasks'}>
            <button class="btn btn-sm btn-outline-secondary" type="button">
              Pending Tasks
            </button></Link>
            <Link to={'/home/all-tasks'}>
            <button class="btn btn-outline-success" type="button">
              All Tasks
            </button></Link>

            <Link to={'/home/completed-tasks'}><button class="btn btn-sm btn-outline-secondary" type="button">
              Completed Tasks
            </button></Link>
            <button class="btn btn-danger btn-outline-white" type="button" onClick={handleLogout}>
              Logout 
            </button>
          </form>
        </nav>
      </div>
      <div className="flex justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Header
