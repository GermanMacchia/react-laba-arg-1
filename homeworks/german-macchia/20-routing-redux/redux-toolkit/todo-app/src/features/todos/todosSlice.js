import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const initialState = {
  entries: [],
};

//immer library handdles with reducers type
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.entries.push({ id: id++, content: payload.content });
    },
    deleteTodo: (state, { payload }) => {
      console.log(payload.id);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
//imported in store
export default todosSlice.reducer;
