import React from 'react'
import { ACTIONS } from '../action'

const TodoForm = ({name, setName, dispatch}) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    if (name !== '' ) dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}})
    setName('')
  }

  return (
    <form className='w-full mb-[1rem]' onSubmit={handleSubmit}>
      <input 
      className='input'
      value={name}
      type="text"
      placeholder='What is the task today?...'
      onChange={e => setName(e.target.value)}
      />

      <button onSubmit={handleSubmit} className='input-btn' type='submit'>Add Task</button>

    </form>
  )
}

export default TodoForm
