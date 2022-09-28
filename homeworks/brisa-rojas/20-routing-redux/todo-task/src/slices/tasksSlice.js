import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  tasks: {},
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addToDo: {
      reducer(state, action) {
        if (!action.payload.todoText) {
          console.log('input is empty');
          return null;
        }
        state.tasks.payload.id = action.payload.todoText;
        console.log(state.tasks); //delete after!!!!!!!!!!
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
        delete state.tasks[action.payload.id];
      },
    },
    editToDo: {
      reducer(state, action) {
        state.tasks[action.payload.id] = action.payload.todoText;
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
