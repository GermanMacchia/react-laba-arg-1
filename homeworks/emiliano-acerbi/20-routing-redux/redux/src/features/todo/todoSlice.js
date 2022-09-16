import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    text: 'Learn React',
  },
];

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
