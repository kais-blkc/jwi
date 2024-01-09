import './style.scss';
import { FC } from 'react';
import { Hero } from './Hero';
import { Popular } from './Popular';
import { TvSeries } from './TvSeries';
import { Cartoons } from './Cartoons';

export const MainPage: FC = () => {
  return (
    <div className="page-main">
      <Hero />
      <Popular />
      <TvSeries />
      <Cartoons />
    </div>
  );
};
