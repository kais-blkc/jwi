import './Loading.scss';
import { FC } from 'react';
import { useAppSelector } from '@/hooks';
import { allImgs } from '@/assets/img';

const Loading: FC = () => {
  const loading = useAppSelector((state) => state.films.loading);
  const activeClasses = loading ? 'active' : '';
  const randomImg = allImgs[Math.floor(Math.random() * allImgs.length)];

  return (
    <div className={'loading-page ' + activeClasses}>
      <img
        src={randomImg}
        alt=""
      />
      <h1>Loading...</h1>
    </div>
  );
};

export default Loading;
