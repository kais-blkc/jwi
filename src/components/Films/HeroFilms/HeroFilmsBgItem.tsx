import { FC } from 'react';
import { IFilm } from '@/models/IFilm';
import { getImgPath } from '@/api';

interface IHeroFilmsBgItemProps {
  film: IFilm;
  curSlideIndex: number;
  index: number;
}

const HeroFilmsBgItem: FC<IHeroFilmsBgItemProps> = ({
  film,
  curSlideIndex,
  index,
}) => {
  const backdrop = getImgPath(film.backdrop_path, '1280');
  const curActive = index === curSlideIndex ? 'active' : '';

  return (
    <img
      className={'img-cover ' + curActive}
      src={backdrop}
      key={film.id}
      data-slide-index={curSlideIndex}
      data-id={index}
    />
  );
};

export default HeroFilmsBgItem;
