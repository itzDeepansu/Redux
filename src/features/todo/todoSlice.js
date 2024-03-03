import { createSlice, nanoid } from "@reduxjs/toolkit";

// making an initial state
//slice - a bigger version of reducer
//reducer  - a functionality
const initialState = {
  todos: [{ id:1, text: "hello world" }],
};

//making a slice(functionality) and exporting it
//every slice caries an object having three things (name,initialstate,reducers)
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todos.push(todo)
    },
    removeTodo: (state,action) => {
        state.todos = state.todos.filter((todo)=>
            todo.id !== action.payload
        )
        //filter method is being used to iterate through all the todos and it takes the condition when
        // todo.id means id of any todo should not match with action.payload which means id of action passed to it
    }
  },
});

// these will be used to change the state in the store
export const {addTodo , removeTodo} = todoSlice.actions
export default todoSlice.reducer