import { configureStore } from '@reduxjs/toolkit';
import filmsSlice from './filmsSlice';
import { rtkApi } from '../api';

const store = configureStore({
  reducer: {
    films: filmsSlice,
    [rtkApi.reducerPath]: rtkApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    if (process.env.NODE_ENV !== 'production') {
      return getDefaultMiddleware().concat(rtkApi.middleware);
    } else {
      return getDefaultMiddleware();
    }
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
