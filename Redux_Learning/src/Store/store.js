import { configureStore } from '@reduxjs/toolkit';
import SlicesClubber from './SlicesClubber';

const store = configureStore({
  reducer: SlicesClubber,
});

export default store;