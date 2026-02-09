const User=require('../models/user')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')

const userSignUp=async(req,res,next)=>{
  try{
    console.log(req.body)
    const {name,email,password}=req.body
    
    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)
    const user=new User({name,email,password:hashedPassword})
    await user.save()
    return res.status(200).json({success:true,message:'user has been created'})
  }catch(e){
    console.log(e)
    return res.status(400).json({success:false,message:'something went wrong try again'})
  }


}
const userLogin=async(req,res,next)=>{
  try{
  const {email,password}=req.body
  const user=await User.findOne({'email':email})
  const check=await bcrypt.compare(password,user.password)
  if (check){
    const token=jwt.sign({userId:user._id,name:user.name,email:user.email},'randomsecretkey',{expiresIn:"1h"})
    return res.status(200).json({success:true,token:token})
  }else{
    res.status(401).json({"message":"invalid Credentials"})
  }
}catch(e){
  return res.status(400).json({message:'something went wrong try again later'})
}

}

const changePassword=async(req,res)=>{
  const userId=req.user.userId
  const user=await User.findById(userId)
  const {oldPassword,newPassword}=req.body
  try{
    const check=await bcrypt.compare(oldPassword,user.password)
    if(!check){
      return res.status(400).json({success:false, message:'wrong password please enter correct password'})
    }
    if(oldPassword===newPassword){
      return res.status(400).json({success:false,message:'new password cannot be the same as old password'})
    }
    const salt=await bcrypt.genSalt(10)
    const newHashedPassword=await bcrypt.hash(newPassword,salt)
    user.password=newHashedPassword
    await user.save()
    return res.status(200).json({success:true,message:'password updated successfully'})
  }catch(e){
    return res.status(400).json({message:e})
  }
}


const auth=async (req,res,next)=>{
  const header=req.headers['authorization']
  if(!header){
    return res.status(400).json({message:'Login Failed, token Expired or not available'})
  }
  const token = header.split(' ')[1]
  try{
    const decoded=jwt.verify(token,'randomsecretkey')
    req.user=decoded
    if(!token){
      return res.status(401).json({message:'Login Failed, no token provided'})
    }
    next()
  }catch(err){
    console.log('error while loggin in',err)
    return  res.status(400).json({success:false,message:'Login Failed'})
  }
}


exports.userSignUp=userSignUp
exports.userLogin=userLogin
exports.auth=auth
exports.changePassword=changePassword