import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: Math.random(),
        text: action.payload,
      };
      state.todos.push(todo);
      state.count += 1;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      state.count -= 1;
    },
    editTodo: (state, action) => {
      state.todos = state.todos.map((todo) => (todo.id === action.payload ? action.payload : todo));
      
    },
  },
});

//exports the created actions to be used in the app
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

//exports the created above reducer property
export default todoSlice.reducer;
