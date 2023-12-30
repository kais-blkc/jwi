import { FC } from 'react';
import { IFilm } from '@/models/IFilm';

interface ICurGenresProps {
  film: IFilm;
  title?: boolean;
  single?: boolean;
  index?: number;
}

const CurGenresSingle: FC<ICurGenresProps> = ({ film, title = true }) => {
  const genres = film.genres.map((item, index) => {
    if (item === undefined) {
      return <span key={index}></span>;
    }

    return <span key={item.id}>{item.name}</span>;
  });

  return (
    <div className="film-item__genre">
      {title ? <b>Жанр: </b> : ''}
      <div className="film-item__genre-list">{genres}</div>
    </div>
  );
};

export default CurGenresSingle;
