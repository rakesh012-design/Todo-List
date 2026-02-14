import {createSlice,createAsyncThunk,current} from '@reduxjs/toolkit'



export const fetchTodoItems=createAsyncThunk(
  'getTodoItems/fetch',
  async()=>{
    const res=await fetch('http://localhost:3000/api/todo',{
      method:"GET",
      credentials:'include'
    })
    const data=await res.json()
    return data
    
  }
)

export const updateTodoItem=createAsyncThunk('updateItem',
  async({id})=>{
    const res=await fetch(`http://localhost:3000/api/todo/${id}/completed`,{
      method:'PUT'
    })
    const data=await res.json()
    return data
  }
)

export const deleteTodoItem=createAsyncThunk('deleteItem',
  async({id})=>{
    const res=await fetch(`http://localhost:3000/api/todo/delete/${id}`,{
      method:"DELETE"
    })
    const data=await res.json()
    return data
  }
)

export const addTodoItem=createAsyncThunk('addItem',
  async({task,date})=>{
    const res=await fetch('http://localhost:3000/api/todo',{
      method:"POST",
      credentials:'include',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({task,date})
    })
    const data=await res.json()
    return data
  }
)


const getTodoItemsSlice=createSlice({
  name:'getTodoItems',
  initialState:{
    items:[],
    status:'loading',
    error:null
  },
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(fetchTodoItems.pending,(state)=>{
      state.status='loading'
    })
    builder.addCase(fetchTodoItems.fulfilled,(state,action)=>{
      state.items=action.payload.todoItems
      state.status='completed'
    })
    builder.addCase(fetchTodoItems.rejected,(state,action)=>{
      state.status='failed'
      console.log(action.error.message)
      state.error=action.error.message
    })
    
    builder.addCase(updateTodoItem.fulfilled,(state,action)=>{
      const updated_item=action.payload
      const item=state.items.find(i=>i._id===updated_item._id)
      if(item){
        item.Completed=updated_item.Completed
      }
    })
    builder.addCase(deleteTodoItem.fulfilled,(state,action)=>{
      const deleted_item=action.payload.item
      state.items=state.items.filter((i)=>i._id!==deleted_item._id)
    })
    builder.addCase(addTodoItem.fulfilled,(state,action)=>{
      const added_item=action.payload.todoItem
      state.items=[added_item,...state.items]
    })
  }
})

export default getTodoItemsSlice