import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const Profile = () => {

  const navigate=useNavigate()
  
  const handleLogout=async()=>{
    localStorage.removeItem('token')
    navigate('/')
  } 

  return (
    <div className='flex justify-center items-start mt-10'>
      <div className='flex flex-row gap-10'>
        <Link to={'change-password'}  className='bg-amber-400 hover:cursor-pointer p-2 font-bold text-2xl hover:text-white'>Change Password</Link>
        <Link to={'change-email'}  className='bg-amber-400 hover:cursor-pointer p-2 font-bold text-2xl hover:text-white'>Change Email</Link>
        <button className='bg-amber-400 hover:cursor-pointer p-2 font-bold text-2xl hover:text-white'  onClick={handleLogout}>Logout</button>
      </div>
    </div>
  )
}

export default Profile
