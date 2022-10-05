import { configureStore } from '@reduxjs/toolkit';
import todoSlice from '../helper/todoSlice';

export const store = configureStore({
  reducer: { todo: todoSlice },
});
