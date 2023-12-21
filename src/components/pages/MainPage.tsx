import { FC } from 'react';
import HeroFilms from '@components/HeroFilms/HeroFilms';
import FilmsRow from '@components/FilmsRow/FilmsRow';

const MainPage: FC = () => {
  return (
    <div>
      <HeroFilms />
      <FilmsRow />
    </div>
  );
};

export default MainPage;
