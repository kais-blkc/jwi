import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './filmsSlice';
import { filmsApi } from '@/services/FilmsService';

const store = configureStore({
  reducer: {
    films: filmsSlice,
    [filmsApi.reducerPath]: filmsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      return getDefaultMiddleware().concat(filmsApi.middleware);
    } else {
      return getDefaultMiddleware();
    }
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
