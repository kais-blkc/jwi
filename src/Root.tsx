import { FC, useEffect } from 'react';
import { getGenreList } from './redux/thunks/filmsThunks';
import { useAppDispatch } from './hooks';
import Header from './components/Header/Header';
// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/global/ScrollToTop';

const App: FC = () => {
  const dispatch = useAppDispatch();

  library.add(fas);

  useEffect(() => {
    dispatch(getGenreList());
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
