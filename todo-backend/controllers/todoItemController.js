const TodoItem=require('../models/todoItems')
const User=require('../models/user')


const createTodoItems= async (req,res,next)=>{
  try{
    const {task,date}=req.body
    const todoItem=new TodoItem({task,date})
    const user=await User.findById(req.user.userId)
    user.todoItems.push(todoItem)
    await user.save()
    await todoItem.save()
    res.status(200).json({success:true,message:'item added',todoItem})
  }catch(e){
    console.log(e)
    res.status(400).json({message:'something went wrong while adding todo Item'})
  }
}

const getTodoItems=async (req,res,next)=>{
  try{
    const user=await User.findById(req.user.userId)
    await user.populate('todoItems')
    const todoItems=user.todoItems
    res.json({todoItems:todoItems})
  }catch(e){
    res.status(200).json({message:e})
  }

}

const deleteTodoItem=async(req,res,next)=>{
  const {id}=req.params
  await TodoItem.findByIdAndDelete(id)

}

const updateTodoItem= async(req,res,next)=>{
  const {id}=req.params
  console.log(id)
  const todoItem=await TodoItem.findById(String(id))
  console.log(todoItem)
  //todoItem.Completed=true
  if (todoItem.Completed==true){
    todoItem.Completed=false
  }
  else{
    todoItem.Completed=true
  }
  await todoItem.save()
  res.json(todoItem)
}

const searchTodoItems=async(req,res)=>{
  try{
    const user=await User.findById(req.user.userId).populate('todoItems')
    const userTodoItems=user.todoItems.map(item=>String(item._id))
    let result=await TodoItem.aggregate([
      {
        $match:{
          $text:{$search:req.query.keyword}}
      }
    ])
    result=result.filter(item=>userTodoItems.includes(String(item._id)))
    res.status(200).json({success:true,message:'Here are the todo Items',data:result})

  }catch(e){
    console.log(e)
    res.status(200).json({success:false,message:'Failed to fetch Items'})
  }
}



exports.createTodoItems=createTodoItems
exports.getTodoItems=getTodoItems
exports.deleteTodoItem=deleteTodoItem
exports.updateTodoItem=updateTodoItem
exports.searchTodoItems=searchTodoItems