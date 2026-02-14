import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { checkUser, loginUser } from '../store/userStore'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Login = () => {
  const dispatch=useDispatch()
  const emailRef=useRef()
  const passwordRef=useRef()
  const navigate =useNavigate()
 
  const handleLogin=async(e)=>{
    e.preventDefault()
    const email=emailRef.current.value
    const password=passwordRef.current.value
    const res=await dispatch(loginUser({email,password}))
    if(res.payload.success){
      navigate('home/all-tasks')
    }
  }

  useEffect(()=>{
    const verifyUser=async()=>{
      const res=await dispatch(checkUser())
      if(res.payload.success){
        navigate('home/all-tasks')
      }
    }
    verifyUser()
    
  },[])

  return (
    /*
    <div className='flex w-screen justify-center items-center h-screen'>
      <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"  ref={emailRef} aria-describedby="emailHelp" placeholder="Enter email"/>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  ref={passwordRef} placeholder="Password" />
  </div>
  <div className="form-group form-button">
    <button onClick={handleLogin} type="submit" className="btn btn-primary">Submit</button>
  </div>
  
</form>
      
    </div>*/
    <div className='border  bg-blue-200 h-screen'>
    <div class="row d-flex justify-content-center m-0">
      <div class="col-12 col-md-8 col-lg-6 col-xl-6">
        <div class="card bg-dark text-white" style={{borderRadius: "1rem;"}}>
          <div class="card-body p-5 text-center">
            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
              <p class="text-white-50 mb-5">
                Please enter your Details
              </p>

              <div
                data-mdb-input-init=""
                class="form-outline form-white mb-4"
                data-mdb-input-initialized="true"
              >
                <input
                  type="email"
                  ref={emailRef}
                  class="form-control form-control-lg"
                />
                <label class="form-label" style={{marginLeft: "0px"}}>
                  Email
                </label>
                <div class="form-notch">
                  <div class="form-notch-leading" style={{width: "9px;"}}></div>
                  <div class="form-notch-middle" style={{width: "40px;"}}></div>
                  <div class="form-notch-trailing"></div>
                </div>
              </div>

              <div
                data-mdb-input-init=""
                class="form-outline form-white mb-4"
                data-mdb-input-initialized="true"
              >
                <input
                  type="password"
                  ref={passwordRef}
                  class="form-control form-control-lg"
                />
                <label
                  class="form-label"
                  for="typePasswordX"
                  style={{marginLeft: "0px;"}}
                >
                  Password
                </label>
                <div class="form-notch">
                  <div class="form-notch-leading" style={{width: "9px;"}}></div>
                  <div class="form-notch-middle" style={{width: "64.8px;"}}></div>
                  <div class="form-notch-trailing"></div>
                </div>
              </div>

        

              <button
                onClick={handleLogin}
                class="btn btn-outline-light btn-lg px-5"
                type="submit"
                data-mdb-button-initialized="true"
              >
                Login
              </button>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                <a href="#!" class="text-white">
                  <i class="fab fa-facebook-f fa-lg"></i>
                </a>
                <a href="#!" class="text-white">
                  <i class="fab fa-twitter fa-lg mx-4 px-2"></i>
                </a>
                <a href="#!" class="text-white">
                  <i class="fab fa-google fa-lg"></i>
                </a>
              </div>
            </div>

            <div>
              <p class="mb-0">
                Don't have an account?{" "}
                <a href="#!" class="text-white-50 fw-bold">
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Login
