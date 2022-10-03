import { createSlice } from '@reduxjs/toolkit';

export const TodoReducer = createSlice({
  name: 'toDo',
  initialState: {
    todoList: [],
  },
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: Date.now(),
        content: action.payload.newContent,
      };
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    editTodo: () => {},
  },
});
export const { addToDo, deleteToDo, editTodo } = TodoReducer.actions;
export default TodoReducer.reducer;
