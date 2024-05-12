import React, { useEffect } from 'react'
import { useState, useReducer } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { ACTIONS } from '../action.js';
import EditTodo from './EditTodo.jsx';
import { v4 as uuidv4 } from 'uuid'; 


uuidv4()

const reducer = (todos, action) => {  
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)];

    case ACTIONS.TOGGLE_COMPLETE:
      return todos.map(todo => 
        todo.id === action.payload.id ? {...todo, complete: !todo.complete}: todo
      );

    case ACTIONS.DELETE_TODO: 
      return todos.filter(todo => todo.id !== action.payload.id);

    case ACTIONS.EDIT_TODO:
      return todos.map(todo => todo.id === action.payload.id ? {...todo, isEditing: !todo.isEditing} : todo)

    case ACTIONS.EDIT_NAME: 
      return todos.map(todo => todo.id === action.payload.id ? {...todo, name: action.payload.name, isEditing: !todo.isEditing}: todo);
    
    default: 
      return todos
  }
};

const newTodo = (name) => {
  return {id: uuidv4(), name: name, complete: false, isEditing: false}
}

const TodoWrapper = () => {

  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [name, setName] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos]);

  return (
    <div>
      <div className='todo-wrapper'>
        <h1 className='text-[1.5rem] text-white mb-[1rem] font-bold font-oswald '>Gets Things Done!</h1>
        
        <TodoForm name={name} setName={setName} dispatch={dispatch} />

        <p className='text-white font-ubunMs my-5 text-[0.9rem] md:text-[1rem]'>You can check the task by pressing the text of the task.</p>

        {todos.map(todo => (
          todo.isEditing ? (
          <div key={todo.id}>
            <EditTodo todo={todo} dispatch={dispatch}/>
          </div>
        ) : (
          <div key={todo.id}>
          <Todo todo={todo} dispatch={dispatch}/>
        </div>
        )
          
        ))}

        
    </div>
    </div>
  )
}

export default TodoWrapper
