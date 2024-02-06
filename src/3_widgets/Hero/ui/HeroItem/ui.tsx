import { FC } from 'react';
import { Link } from 'react-router-dom';
import { CurGenres } from '@/5_entities/Genres';
import { VoteAverage } from '@/5_entities/VoteAverage';
import { getImgPath } from '@/6_shared/api';
import { IFilm } from '@/6_shared/model';
import { EImgSizes } from '@/6_shared/config';

interface IHeroFilmsItemProps {
  film: IFilm;
  index?: number;
}

export const HeroItem: FC<IHeroFilmsItemProps> = ({ film }) => {
  const poster = getImgPath(film.poster_path, EImgSizes.medium);
  const bg = getImgPath(film.backdrop_path, EImgSizes.medium);
  const img = window.innerWidth > 767 ? poster : bg;

  return (
    <div
      key={film.id}
      data-id={film.id}
      className="films-hero__item"
    >
      <Link
        className="films-hero__item-img hover-opacity"
        to={'/movies/' + film.id}
      >
        <img
          className="img-cover"
          src={img}
          alt=""
        />
      </Link>
      <div className="films-hero__item-info">
        <div>
          <div className="films-hero__item-title">{film.title}</div>
          <div className="films-hero__item-desc">{film.overview}</div>
        </div>

        <div className="films-hero__item-other">
          <CurGenres genre_ids={film.genre_ids} />

          <p>
            <b>Дата выхода: </b>
            <span>{film.release_date}</span>
          </p>
          <div className="films-hero__item-rate">
            <VoteAverage vote={film.vote_average} />
          </div>
        </div>
      </div>
    </div>
  );
};
