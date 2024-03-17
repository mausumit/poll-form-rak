import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from './questionsSlice.ts';

export default configureStore({
  reducer: {
    questions:questionsReducer
  },
});