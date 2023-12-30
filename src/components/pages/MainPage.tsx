import { FC } from 'react';
import HeroFilms from '@/components/Films/HeroFilms/HeroFilms';
import FilmsPopular from '@/components/Films/FIlmsLists/FilmsPopular';
import FilmsCartoon from '@/components/Films/FIlmsLists/FilmsCartoon';
import TvPopular from '@/components/Films/FIlmsLists/TvPopular';

const MainPage: FC = () => {
  return (
    <div>
      <HeroFilms />
      <FilmsPopular />
      <FilmsCartoon />
      <TvPopular />
    </div>
  );
};

export default MainPage;
