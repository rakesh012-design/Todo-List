export const getTodoItems=async()=>{
  const token=localStorage.getItem('token')
  const res=await fetch('http://localhost:3000/api/todo',{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    } 
  })

  const data=await res.json()
  return data

}

export const userLogin=async({email,password})=>{
  const res=await fetch('http://localhost:3000/api/todo/login',{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({email,password})
  })
  const data=await res.json()
  return data
}


export const updateTodoItem=async(id)=>{
  const token=localStorage.getItem('token')
  const res=await fetch(`http://localhost:3000/api/todo/${id}/completed`,{
    method:"PUT",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
  })
  const data=await res.json()
  return data
}

export const deleteTodoItem=async(id)=>{
  const token=localStorage.getItem('token')
  console.log(id)
  const res=await fetch(`http://localhost:3000/api/todo/delete/${id}`,{
    method:"DELETE",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
  })
}


export const addTodoItem=async({task,date})=>{
  const token=localStorage.getItem('token')
  const res=await fetch('http://localhost:3000/api/todo',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
    body:JSON.stringify({task,date})
  })
  const data=await res.json()
  //console.log(data)
  return data
}

export const changePassword=async({oldPassword,newPassword})=>{
  const token=localStorage.getItem('token')
  const data=await fetch('http://localhost:3000/api/todo/change-password',{
    method:"POST",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    },
    body:JSON.stringify({oldPassword,newPassword})
  })
  const res=await data.json()

  return res
}

export const userSignup=async({name,email,password})=>{
  console.log(name,email,password)
  const res=await fetch('http://localhost:3000/api/todo/signup',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({name,email,password})
  })
  const data=await res.json()
  return data
}

export const searchTodoItems=async({value})=>{
  const token=localStorage.getItem('token')
  const res=await fetch(`http://localhost:3000/api/todo/get-items?keyword=${value}`,{
    method:"GET",
    headers:{
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }
  })
  const data=res.json()
  return data

}