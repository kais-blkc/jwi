import { FC } from 'react';
import { getImgPath } from '../../api';
import { IFilm } from '../../types';
import VoteAverage from '../global/VoteAverage';
import CurGenres from '../global/CurGenres';
import { Link } from 'react-router-dom';

interface IHeroFilmsItemProps {
  film: IFilm;
  index?: number;
}

const HeroFilmsItem: FC<IHeroFilmsItemProps> = ({ film }) => {
  const poster = getImgPath(film.poster_path, '780');
  const bg = getImgPath(film.backdrop_path, '780');
  const img = window.innerWidth > 767 ? poster : bg;

  return (
    <Link
      to={'/movies/' + film.id}
      key={film.id}
      data-id={film.id}
      className="films-hero__item"
    >
      <div className="films-hero__item-img">
        <img
          className="img-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="films-hero__item-info">
        <div>
          <div className="films-hero__item-title">{film.title}</div>
          <div className="films-hero__item-desc">{film.overview}</div>
        </div>

        <div className="films-hero__item-other">
          <CurGenres film={film} />
          <p>
            <b>Дата выхода: </b>
            <span>{film.release_date}</span>
          </p>
          <div className="films-hero__item-rate">
            <VoteAverage film={film} />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HeroFilmsItem;
