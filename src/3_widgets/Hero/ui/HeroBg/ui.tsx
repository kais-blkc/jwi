import { FC } from 'react';
import { getImgPath } from '@/6_shared/api';
import { EImgSizes } from '@/6_shared/config';

interface IHeroBgProps {
  filmId: number;
  backdropPath: string | undefined;
  curSlideIndex: number;
  index: number;
}

export const HeroBg: FC<IHeroBgProps> = ({
  filmId,
  backdropPath,
  curSlideIndex,
  index,
}) => {
  const backdrop = getImgPath(backdropPath, EImgSizes.large);
  const curActive = index === curSlideIndex ? 'active' : '';

  return (
    <img
      className={'img-cover ' + curActive}
      src={backdrop}
      key={filmId}
      data-slide-index={curSlideIndex}
      data-id={index}
    />
  );
};
