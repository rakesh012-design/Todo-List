import React, { useRef, useState } from 'react'
import {changePassword} from '../services/services'
import { ToastContainer,toast } from 'react-toastify'
import {FaEye, FaEyeSlash} from 'react-icons/fa'

const ChangePassword = () => {

  const oldPasswordRef=useRef()
  const newPasswordRef=useRef()

  const handleOnSubmit=async()=>{
    const oldPassword=oldPasswordRef.current.value
    const newPassword=newPasswordRef.current.value

    const data=await changePassword({oldPassword,newPassword})
    if (!data.success){
      toast.error(data.message)
    }else{
      toast.success(data.message)
    }
  }

  const [showPassword,setShowPassword]=useState(false)
  const [showPassword2,setShowPassword2]=useState(false)

  return (
    <div className='w-1/2 border-2 h-1/2 flex justify-center absolute left-1/4 mt-10' >
      <form onSubmit={(e)=>{
        e.preventDefault()
        handleOnSubmit()
        }} className='flex gap-10 flex-col mt-8 ' >
        <div className='flex gap-2'> 
        <input type={showPassword ? 'text' : 'password'} placeholder='Current Password' ref={oldPasswordRef}  className='border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 '></input>
        <span onClick={()=>setShowPassword(!showPassword)}>{showPassword ? <FaEye /> : <FaEyeSlash />}</span></div>
        <div className='flex gap-2'>
        <input type={showPassword2 ? 'text' : 'password'} placeholder='New Password' ref={newPasswordRef}  className='border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-500 '></input>
        <span onClick={()=>setShowPassword2(!showPassword2)}>{showPassword2 ? <FaEye/> : <FaEyeSlash/> } </span>
        </div>
        <button className='border-2 border-green-500 bg-amber-400 hover:bg-green-500'>Submit</button>

      </form>
      <ToastContainer position='top-right' autoClose={3000}/>
    </div>
  )
}

export default ChangePassword
