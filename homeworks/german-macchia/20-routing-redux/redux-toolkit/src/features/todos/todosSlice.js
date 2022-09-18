import { createSlice } from "@reduxjs/toolkit";

let id = 0;
const initialState = {
  entries: [],
  edit: {
    open: false,
    id: null,
    content: null,
  },
};

//immer library handles reducers type
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, { payload }) => {
      state.entries.push({ id: id++, content: payload.content });
    },
    deleteTodo: (state, { payload }) => {
      const idx = state.entries.findIndex(
        (entry) => entry.id === parseInt(payload.id)
      );
      state.entries.splice(idx, 1);
    },
    openEdit: (state, { payload }) => {
      state.edit = {
        open: true,
        id: parseInt(payload.id),
        content: payload.content,
      };
    },
    closeEdit: (state) => {
      state.edit = {
        open: false,
        id: null,
        content: null,
      };
    },
    editTodo: (state, { payload }) => {
      const idx = state.entries.findIndex(
        (entry) => entry.id === parseInt(payload.id)
      );
      state.entries.splice(idx, 1, {
        id: payload.id,
        content: payload.content,
      });
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  openEdit,
  closeEdit,
  editTodo,
} = todosSlice.actions;
//imported in store
export default todosSlice.reducer;
