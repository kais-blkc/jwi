import './index.scss';
import { FC, useEffect } from 'react';
import { getGenreList } from '../6_shared/store/thunks/filmsThunks';
import { useAppDispatch } from '../6_shared/lib/hooks';
import { ScrollToTop } from '@/6_shared/ui/ScrollToTop';
import { Header } from '@/3_widgets/Header';
// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { Outlet } from 'react-router-dom';

export const App: FC = () => {
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

// export default App;
