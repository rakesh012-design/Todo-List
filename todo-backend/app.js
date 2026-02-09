
const mongoose=require('mongoose')
const express=require('express')
const path=require('path')
const mongodb=require('mongodb')
const cors=require('cors')

//const MongoDBStore=require('connect-mongodb-session')(session)


const rootDir=require('./utils/pathUtil.js')


const errorController=require('./controllers/error_controllers')
const  {todoItemsRouter}  = require('./Routes/todoItemRouter')
const userRouter=require('./Routes/userRouter.js')


const app=express()


const dbUrl='mongodb+srv://root:root@first.uf3bqob.mongodb.net/todo?appName=First'



app.use(express.urlencoded())

app.use(express.json())
app.use(cors())

app.use("/api/todo",todoItemsRouter)
app.use(userRouter)




app.use(errorController.pageNotFound)

const port=3000

mongoose.connect(dbUrl).then(()=>{
  app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`)
  })

}).catch((e)=>{
  console.log('error while connecting',e)
})
