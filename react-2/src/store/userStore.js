import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";



export const loginUser= createAsyncThunk('loginUser',
  async({email,password})=>{
    const res=await fetch('http://localhost:3000/api/todo/login',{
      method:"POST",
      credentials:'include',
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({email,password}),
      
    })
    const data=await res.json()
    return data
  })

export const checkUser=createAsyncThunk('checkUser',
  async()=>{
    const res=await fetch('http://localhost:3000/api/todo/check',{
      method:"GET",
      credentials:'include',
    })
    const data=await res.json()
    return data
  })  

export const logout=createAsyncThunk('logoutUser',
  async()=>{
    const res=await fetch('http://localhost:3000/api/todo/logout',{
      method:"POST",
      credentials:'include'
    })
    const data=await res.json()
    return data
  })


const userSlice=createSlice({
  name:'userStore',
  initialState:{
    name:'',
    todoItems:[]
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(loginUser.fulfilled,(state,action)=>{
      console.log(action.payload)
    })
    builder.addCase(loginUser.rejected,(state,action)=>{
      console.log(action.payload)
    })
    builder.addCase(checkUser.fulfilled,(state,action)=>{
      console.log(action.payload)
    })
    builder.addCase(checkUser.rejected,(action,state)=>{
      console.log(action.payload)
    })
    builder.addCase(logout.fulfilled,(state,action)=>{
      console.log(action.payload)
    })

  }
})

export default userSlice