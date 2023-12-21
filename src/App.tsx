import '@/main.scss';
import { FC, useEffect } from 'react';
import { getGenreList } from './redux/thunks/filmsThunks';
import { useAppDispatch } from './hooks';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

const App: FC = () => {
  const dispatch = useAppDispatch();

  library.add(fas);

  useEffect(() => {
    dispatch(getGenreList());
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
