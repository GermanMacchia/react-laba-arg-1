import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
  tasks: [],
  id: [],
};

export const mainInputSlice = createSlice({
  name: 'mainInput',
  initialState,
  reducers: {
    addToDo: {
      reducer(state, action) {
        if (!action.payload.todoText) {
          console.log('input is empty');
          return null;
        }
        state.tasks.push(action.payload.todoText);
        state.id.push(action.payload.id);
        state.counter += 1;
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
        let idIndex = state.id.indexOf(action.payload);
        state.id.splice(idIndex, 1);
        state.tasks.splice(idIndex, 1);
        state.counter -= 1;
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
