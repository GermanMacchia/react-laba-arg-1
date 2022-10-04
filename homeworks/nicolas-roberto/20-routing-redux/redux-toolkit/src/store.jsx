import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from './Reducers/TodoReducer';

/* This reducer function to handles all updates */

export default configureStore({
  /* Allows you create n number of reducers */
  reducer: { toDo: TodoReducer },
});
