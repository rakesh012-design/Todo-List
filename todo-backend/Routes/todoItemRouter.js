const express=require('express')
const todoItemsRouter=express.Router()


const todoItemController=require('../controllers/todoItemController')
const userController=require('../controllers/userController')


todoItemsRouter.post('/',userController.auth,todoItemController.createTodoItems)
todoItemsRouter.get('/',userController.auth,todoItemController.getTodoItems)
todoItemsRouter.delete('/delete/:id',userController.auth,todoItemController.deleteTodoItem)
todoItemsRouter.put('/:id/completed',userController.auth,todoItemController.updateTodoItem)
todoItemsRouter.get('/get-items',userController.auth,todoItemController.searchTodoItems)




exports.todoItemsRouter=todoItemsRouter