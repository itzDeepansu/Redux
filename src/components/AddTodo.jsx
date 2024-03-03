import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

// we use dispatch to call a reducer and for that first we need to convert this useDispatch to a variable
const AddTodo = () => {
    const [input, setinput] = useState('')
    const dispatch = useDispatch()
    const addhandler = (e) =>{
      e.preventDefault()
      dispatch((addTodo(input)))
      setinput('')
    }
  return (
    <div>
      <form onSubmit={addhandler}>
        <input placeholder="Enter todo..." type="text" value={input} onChange={(e)=>setinput(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default AddTodo
