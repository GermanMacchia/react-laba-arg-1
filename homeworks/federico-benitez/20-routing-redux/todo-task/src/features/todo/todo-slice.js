import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: () => {
      console.log('adding todo');
    },
    editTodo: () => {
      console.log('editing todo');
    },
    removeTodo: () => {
      console.log('deleting todo');
    },
  },
});

export const { addTodo } = todoSlice.actions;
export default todoSlice.reducer;
