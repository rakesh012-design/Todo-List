import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {FaEye,FaEyeSlash} from 'react-icons/fa'
import {userSignup} from '../services/services'
import { ToastContainer,toast } from 'react-toastify'

const Signup = () => {
  const [showPassword,setShowPassword]=useState(false)
  const userNameRef=useRef()
  const emailRef=useRef()
  const passwordRef=useRef()

  const handleOnSubmit=async()=>{
    const name=userNameRef.current.value
    const email=emailRef.current.value
    const password=passwordRef.current.value

    const data=await userSignup({name,email,password})
    if(data.success){
      toast.success(data.message)
    }else{
      toast.error(data.message)
    }
    

  }


  return (
    <div className='bg-green-400 w-1/2 h-3/4 absolute left-1/5 top-1/6 flex justify-center flex-col items-center'>
      <ToastContainer position='top-right' autoClose={3000}/>
      <h1 className='text-amber-600 flex justify-center absolute top-1 text-4xl font-bold'>Please Enter your Details</h1>
      <form className='flex justify-center mt-10 absolute top-1/5 flex-col gap-8' onSubmit={(e)=>{
        e.preventDefault()
        handleOnSubmit()
      }}>
        <input placeholder='Enter your user name' type='text' ref={userNameRef}
        className='border-amber-400 border-2 focus:outline-none focus:ring-4 focus:ring-amber-400 text-xl font-bold'></input>
        <input placeholder='Enter your Email' type='email' ref={emailRef}
        className='border-amber-400 border-2 focus:outline-none focus:ring-4 focus:ring-amber-400 text-xl font-bold'></input>
        <div className='flex'>
        <input placeholder='Enter your Password' type={showPassword ? 'text' :'password'} ref={passwordRef}
        className='border-amber-400 border-2 focus:outline-none focus:ring-4 focus:ring-amber-400 text-xl font-bold'></input>
        <span onClick={()=>{
          setShowPassword(!showPassword)
        }}
        className='p-2'>{showPassword ? <FaEye/> : <FaEyeSlash/>}</span>
        </div>
        <button 
        className='border-2 border-amber-400 p-2 bg-amber-400 text-2xl font-bold hover:text-white hover:bg-green-800'
        >Submit</button>
      <Link to={'/'}>Alread have an account login</Link>
      </form>
      
    </div>
  )
}

export default Signup
