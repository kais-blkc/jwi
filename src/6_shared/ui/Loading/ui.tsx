import './styles.scss';
import { FC } from 'react';
import { allImgs } from '@/6_shared/assets/img';

export const Loading: FC = () => {
  const randomImg = allImgs[Math.floor(Math.random() * allImgs.length)];

  return (
    <div className={'loading-page active'}>
      <img
        src={randomImg}
        alt=""
      />
      <h1>Loading...</h1>
    </div>
  );
};
