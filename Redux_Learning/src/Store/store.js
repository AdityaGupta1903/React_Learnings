import { configureStore } from '@reduxjs/toolkit';
import rootuser from './Root';

const store = configureStore({
  reducer: rootuser,
});

export default store;