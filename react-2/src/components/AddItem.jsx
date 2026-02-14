import React, { useRef } from 'react'
import {AiFillPlusSquare} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import {addTodoItem} from '../store/getTodoItemsSlice'

const AddItem = () => {
  const taskRef=useRef()
  const dateRef=useRef()
  const dispatch=useDispatch()
  const handleAdd=async()=>{
    let task=taskRef.current.value
    let date=dateRef.current.value
    dispatch(addTodoItem({task,date}))
    taskRef.current.value=''
    dateRef.current.value=''
  }
  return (
    <div className="pb-2">
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-row align-items-center">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Add Task..."
              ref={taskRef}
            />
            <i className="fas fa-calendar-alt fa-lg me-3"><input type='date' ref={dateRef}/></i>
            <div>
              <button
                type="button"
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-primary active"
                data-mdb-button-initialized="true"
              
                aria-pressed="true"
                onClick={handleAdd}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddItem
