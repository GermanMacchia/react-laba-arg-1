import { createSlice } from '@reduxjs/toolkit';

export const TodoReducer = createSlice({
  name: 'toDo',
  initialState: {
    todoList: [
      { id: 1, content: 'Task 1' },
      { id: 2, content: 'Task 2' },
    ],
  },
  reducers: {
    addToDo: () => {},
    deleteToDo: () => {},
    editTodo: () => {},
  },
});
export const { addToDo, deleteToDo, editTodo } = TodoReducer.actions;
export default TodoReducer.reducer;
