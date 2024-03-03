# redux in ReactJS

- npm install @reduxjs/toolkit
- npm install react-redux
 
- import configure store and export a store 

- create slice (in features/todo/todoSlice.js)

- import methods named createSlice and nanoid(optional-used to generate random unique id)

- create inital state
- export slice by making it using createSlice
- export reducers individually using todoSlice.actions
- export default todoSlice.reducer
- import todoReducer in store and then pass key value of (reducer:todoReducer) to the configure store

- we use useDispatch to call a reducer in our components but for that first we need to import it and variblize it and then we can call it as a method anywhere 

- we use useSelector to target the state of reducers 
it can be used as ```const todos = useSelector((state) => state.todos);```

- at last add provider blocks to the main.jsx file giving store={store}
