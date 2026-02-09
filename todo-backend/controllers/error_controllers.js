const express=require('express')


const pageNotFound=(req,res,next)=>{
  console.log('page not found')
  res.status(404).json({message:"error page not found"})
}


exports.pageNotFound=pageNotFound