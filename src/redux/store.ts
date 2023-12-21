import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './filmsSlice';

const store = configureStore({
  reducer: {
    films: filmsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
