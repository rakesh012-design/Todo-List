import React, { useEffect, useState } from 'react'
import CompletedTasks from './CompletedTasks'
import PendingTasks from './PendingTasks'
import AllTasks from './AllTasks'
import { Link, NavLink } from 'react-router-dom'
import {jwtDecode} from 'jwt-decode'
import {CgProfile} from 'react-icons/cg'

const Header = () => {
  const isActive=false

  const [active,setActive]=useState()


 
  
  return (
    <div className='flex flex-row justify-evenly bg-green-400  h-22 shadow-2xl z-10 rounded'>
      
      <NavLink to={'/all-tasks'} className="text-4xl font-bold hover:text-white p-2 cursor-pointer shadow-2xl rounded" onClick={()=>setActive("All Tasks")} > <img width="80" height="96" src="https://img.icons8.com/external-vectorslab-glyph-vectorslab/53/external-Web-List-education-and-school-vectorslab-glyph-vectorslab.png"/></NavLink>
      <Link to={'/profile'} className=
      {`text-4xl font-bold hover:text-white p-4  cursor-pointer shadow-2xl border-2 rounded 
      ${active=="Profile" ? "bg-amber-500 text-white"  : '' }`}
      onClick={()=>{
        setActive("Profile")
      }}><CgProfile size={60}/> </Link>
      <Link to={'/completed-tasks'} className=
      {`text-4xl font-bold hover:text-white p-4  cursor-pointer shadow-2xl border-2 rounded 
      ${active=="Completed Tasks" ? "bg-amber-500 text-white"  : '' }`}

      onClick={()=>{
        setActive("Completed Tasks")
      }}>Completed Tasks </Link>
    <Link to={'/all-tasks'} className=
    {`text-4xl font-bold hover:text-white p-4  cursor-pointer shadow-2xl border-2 rounded ${ active=="All Tasks" ?"bg-amber-500 text-white"  : '' }  ""`} 
    onClick={()=>{
      setActive("All Tasks")
    }}>All Tasks </Link>
     <Link to={'/pending-tasks'} className=
     {`text-4xl font-bold hover:text-white p-4  cursor-pointer shadow-2xl border-2 rounded ${active=="Pending Tasks" ? "bg-amber-500 text-white"  : '' }  ""`}  onClick={()=>{
      setActive("Pending Tasks")
    }}>Pending Tasks </Link>
  
      
      </div>
  )
}

export default Header
