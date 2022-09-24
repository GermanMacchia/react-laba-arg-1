import { configureStore } from '@reduxjs/toolkit';
import mainInputReducer from '../features/MainInput/mainInputSlice';

export const store = configureStore({
  reducer: {
    mainInput: mainInputReducer,
  },
});
