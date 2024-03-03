import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

// useSelector is used to target the state varible of any reducer/store , it gives us the state 
// in our case we made a state containing different items so we used an arrow function to target state.todos
function ShowTodo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Todos:</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
        </li>
      ))}
    </div>
  );
}

export default ShowTodo;
