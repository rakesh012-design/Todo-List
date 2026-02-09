  import React, { useEffect, useRef } from 'react'
  import { userLogin } from '../services/services'
  import {ToastContainer,toast} from 'react-toastify'
  import 'react-toastify/dist/ReactToastify.css'
  import {Link, useNavigate} from 'react-router-dom'

  const Login = () => {
    const emailRef=useRef()
    const passwordRef=useRef() 
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault()
      const email=emailRef.current.value
      const password=passwordRef.current.value
      try{
        const data=await userLogin({email,password})
        if (data.success){
          localStorage.setItem("token",data.token)
          navigate('/all-tasks')

        }else{
          console.log('in else')
          toast.error(data.message)
        }
      }catch(e){
        console.log(e)
      }

    }
    useEffect(()=>{
      const loginCheck=()=>{
      const token=localStorage.getItem('token')
      if(token){
        navigate('/all-tasks')
        toast.success('you are already logged in')
      }
    }
    loginCheck()
    })

    return (
    
      <div 
        className='flex justify-center items-center absolute top-1/5 left-1/3  
        flex-col gap-18 bg-green-400 w-1/4 h-3/4 rounded shadow-4xl p-8' >
        <ToastContainer position='top-right' autoClose={3000}/>
        <h1 className='text-4xl font-bold text-white'>Login</h1>
        <form className='flex flex-col gap-6' onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter your Email' name='email' ref={emailRef}
          className='text-center border-2 border-green-500 font-bold text-black  transition-transform duration-300 hover:-translate-y-2 bg-amber-400'/>
          <input type='password' placeholder='Enter your Password' name='password' ref={passwordRef}
          className='text-center border-2 border-green-500 font-bold text-black  transition-transform duration-300 hover:-translate-y-2 bg-amber-400'/>
          <button className='hover:cursor-pointer hover:bg-amber-400 text-center border-2 border-black font-bold text-white text-2xl p-1' 
        >Submit</button>
        </form>

        <Link className='text-amber-600' to={'/signup'}>dont have an account signup here!!!</Link>
        
      </div>
    
    )
  }

  export default Login
