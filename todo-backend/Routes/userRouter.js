const express=require('express')
const usercontroller=require('../controllers/userController')

const userRouter=express.Router()


userRouter.post('/api/todo/signup',usercontroller.userSignUp)
userRouter.post('/api/todo/login',usercontroller.userLogin)
userRouter.post('/api/todo/change-password',usercontroller.auth,usercontroller.changePassword)


module.exports=userRouter