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
      action.payload = state.todos.map((todo) => ({ ...todo })); // con el {...todo} obtengo un obj con el id y text
      console.log(action.payload);
      state.todos.map((todo) => (todo.id === action.payload[0].id ? {...state, todos: {text: action.payload[0].text}} : todo));
    },
  },
});

//exports the created actions to be used in the app
export const { addTodo, removeTodo, editTodo } = todoSlice.actions;

//exports the created above reducer property
export default todoSlice.reducer;
