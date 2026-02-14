import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {useDispatch} from 'react-redux'
import {fetchTodoItems, updateTodoItem,deleteTodoItem} from '../store/getTodoItemsSlice'

const Item = ({item}) => {
  const dispatch=useDispatch()

  const handleupdate=async()=>{
    dispatch(updateTodoItem({id:item._id}))
  }
  const handleDelete=async()=>{
    dispatch(deleteTodoItem({id:item._id}))
  }
  

  return (
    /*<div className='flex justify-evenly w-full items-center text-center'>
      <p className='w-1/2'>{item.task}</p>
      <p className='w-1/2'>{item.date.split('T')[0]}</p>
      <p className='w-1/2'><input type='radio' checked={item.Completed} onChange={handleupdate} onClick={handleupdate}/> </p>
      <p className='w-1/2 flex justify-center'><button onClick={handleDelete}><AiFillDelete size={50} color='red'/></button></p>
    </div>*/
    <li class="list-group-item border-0 d-flex align-items-center ps-0 flex justify-evenly items-center align-center w-full">
      <input
        class="form-check-input me-3 border-2 border-black text-center w-1/4"
        type="checkbox"
        value=""
        aria-label="..."
        checked={item.Completed}
        onChange={handleupdate}
      />

      {item.Completed? <s className='w-1/2 text-center'>{item.task}</s> : <p className='w-1/2 text-center'>{item.task}</p>}
      <button className='btn btn-danger' onClick={handleDelete}>delete</button>
    </li>
  );
}

export default Item
