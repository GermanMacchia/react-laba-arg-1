import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addToDo: {
      reducer(state, action) {
        state[action.payload.id] = action.payload.todoText;
      },
      prepare(todoText) {
        return {
          payload: {
            id: nanoid(),
            todoText,
          },
        };
      },
    },
    deleteToDo: {
      reducer(state, action) {
        delete state[action.payload.id];
      },
    },
    editToDo: {
      reducer(state, action) {
        state[action.payload.id] = action.payload.todoText;
      },
      prepare(id, todoText) {
        return {
          payload: {
            id,
            todoText,
          },
        };
      },
    },
  },
});

export const { addToDo, deleteToDo, editToDo } = tasksSlice.actions;

export default tasksSlice.reducer;
