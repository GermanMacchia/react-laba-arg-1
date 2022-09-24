import { configureStore } from '@reduxjs/toolkit';
import mainInputReducer from '../components/MainInput/mainInputSlice';

export const store = configureStore({
  reducer: {
    mainInput: mainInputReducer,
  },
});
