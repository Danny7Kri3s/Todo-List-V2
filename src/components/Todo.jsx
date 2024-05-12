import React from 'react'
import { FaPenToSquare } from "react-icons/fa6";
import { FaTrash } from "react-icons/fa";
import { ACTIONS } from '../action';

const Todo = ({todo, dispatch}) => {
  return (
    <div className='flex justify-between items-center bg-[#8758ff] mx-auto py-3 px-4  text-white my-[1rem] rounded-md shadow-lg flex-wrap h-auto '>
      <p
       className={`${todo.complete ? 'completed' : 'incompleted'}`}
       onClick={() => dispatch({type: ACTIONS.TOGGLE_COMPLETE, payload: {id: todo.id}})}
      >{todo.name}</p>

      <div className='flex gap-4 text-white'>
        <FaPenToSquare onClick={() => dispatch({type: ACTIONS.EDIT_TODO, payload: {id: todo.id}})} className='cursor-pointer'/>
        
        <FaTrash onClick={() => dispatch({type: ACTIONS.DELETE_TODO, payload: {id: todo.id}})} className='cursor-pointer'  />
      </div>
    </div>
  )
}

export default Todo
