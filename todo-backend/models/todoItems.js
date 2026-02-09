const mongoose=require('mongoose')


const todoItemSchema=mongoose.Schema(
  {
  task:{
    type:String,
    required:true
  },

  date:{
    type:Date,
    required:true
  },

  Completed:{
    type:Boolean,
    default:false
  },
},
{
  timestamps:true
}
)

todoItemSchema.index({task:"text"})

module.exports=mongoose.model('TodoItem',todoItemSchema)