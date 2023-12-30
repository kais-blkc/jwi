import { FC } from 'react';
import { getImgPath } from '@/api';
import { IFilm } from '@/models/IFilm';
import { Link } from 'react-router-dom';
import VoteAverage from '@/components/global/VoteAverage';
import CurGenres from '@/components/global/CurGenres';

interface IFilmsItemProps {
  film: IFilm;
  index?: number;
}

const FilmsItem: FC<IFilmsItemProps> = ({ film }) => {
  const img = getImgPath(film.poster_path, '500');

  return (
    <Link
      to={'/movies/' + film.id}
      key={film.id}
      data-id={film.id}
      className="films__item"
    >
      <div className="films__item-img">
        <img
          className="img-cover"
          src={img}
          alt=""
        />
      </div>
      <div className="films__item-info">
        <VoteAverage
          film={film}
          title={false}
        />

        <CurGenres
          film={film}
          title={false}
        />

        <div className="films__item-title">
          <b>{film.title}</b>
        </div>
      </div>
    </Link>
  );
};

export default FilmsItem;
