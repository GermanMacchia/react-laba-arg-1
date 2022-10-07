import { createSlice } from '@reduxjs/toolkit';

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: (Math.random() * 100).toString(36),
        name: action.payload.task,
      };
      state.push(newTask);
    },
    deleteTask: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    editTodo: (state, action) => {
      let idx = state.findIndex((e) => e.id === action.payload.identifier);
      state[idx].name = action.payload.name;
    },
  },
});

export const { addTask, deleteTask, editTodo } = tasksSlice.actions;

export default tasksSlice.reducer;
