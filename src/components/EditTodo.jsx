import React from 'react'
import { ACTIONS } from '../action'
import { useState } from 'react'

const EditTodo = ({todo, dispatch}) => {

  const [updateName, setUpdateName] = useState(todo.name)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (updateName !== '' ) dispatch({type: ACTIONS.EDIT_NAME, payload: {name: updateName, id: todo.id}})
    setUpdateName('')
  }

  return (
    <form className='w-full mb-[1rem]' onSubmit={handleSubmit}>
      <input 
      className='input'
      value={updateName}
      type="text"
      placeholder='Update task'
      onChange={e => setUpdateName(e.target.value)}
      />

      <button onClick={handleSubmit} className='input-btn' type='submit'>Update</button>

    </form>
  )
}

export default EditTodo
