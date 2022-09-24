import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: [],
  id: [],
};

export const mainInputSlice = createSlice({
  name: 'mainInput',
  initialState,
  reducers: {
    addToDo: {
      reducer(state, action) {
        state.tasks.push(action.payload.todoText);
        state.id.push(action.payload.id);
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
        console.log('in reducer'+action.payload);
        let idIndex = state.id.indexOf(action.payload);
        console.log('idIndex'+idIndex);
        state.id.splice(idIndex, 1);
      },
    },
    editToDo: {
      reducer(state, action) {
        let idIndex = state.id.indexOf(action.payload.id);
        state.tasks[idIndex] = action.payload.text;
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

export const { addToDo, deleteToDo, editToDo } = mainInputSlice.actions;

export default mainInputSlice.reducer;
