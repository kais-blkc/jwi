import { FC } from 'react';
import { IFilm } from '@/models/IFilm';
import { useAppSelector } from '@/hooks';

interface ICurGenresProps {
  film: IFilm;
  title?: boolean;
  single?: boolean;
  index?: number;
}

const CurGenres: FC<ICurGenresProps> = ({ film, title = true }) => {
  const allGenres = useAppSelector((state) => state.films.allGenres);

  const genres = film.genre_ids.map((item: number, index: number) => {
    if (index > 2) return;

    return <span key={item}>{(allGenres as Array<any>)[item]}</span>;
  });

  return (
    <div className="film-item__genre">
      {title ? <b>Жанр: </b> : ''}
      <div className="film-item__genre-list">{genres}</div>
    </div>
  );
};

export default CurGenres;
