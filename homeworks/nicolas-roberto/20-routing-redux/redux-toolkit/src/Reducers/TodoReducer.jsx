import { createSlice } from '@reduxjs/toolkit';
/* Reducer functions allows us define initial state and how the state can be updated */
export const TodoReducer = createSlice({
  name: 'toDo',
  initialState: {
    todoList: [],
  },
  reducers: {
    /* Function add takes the content of the input and an id (actual date) */
    addToDo: (state, action) => {
      let newTodoList = {
        id: Date.now(),
        /* The payload is the data that your reducer will use to update the state */
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
    /* Delet function filters the item found by id */
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    /* Edit returns the array with the modified item */
    editTodo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.map((item) => (item.id === action.payload.id ? action.payload : item));
    },
  },
});
/* Action creators for each reducer function */
export const { addToDo, deleteToDo, editTodo } = TodoReducer.actions;
export default TodoReducer.reducer;
