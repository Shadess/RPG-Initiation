import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import initiationReducer from './initiationSlice';

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});

export const store = configureStore({
  middleware: customizedMiddleware,
  reducer: {
    initiation: initiationReducer,
  },
});
