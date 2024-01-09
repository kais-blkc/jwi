import { FC } from 'react';
import { useAppSelector } from '@/6_shared/lib/hooks';
import { Genre } from '@/6_shared/ui/Genre';

interface ICurGenresProps {
  genre_ids: number[];
  title?: boolean;
}

export const CurGenres: FC<ICurGenresProps> = ({ genre_ids, title = true }) => {
  const allGenres = useAppSelector((state) => state?.films?.allGenres);

  const genres = genre_ids.map((item: number, index: number) => {
    if (index > 2) return;

    return (
      <Genre
        key={index}
        title={(allGenres as Array<any>)[item]}
      />
    );
  });

  return (
    <div className="film-item__genre">
      {title ? <b>Жанр: </b> : ''}
      <div className="film-item__genre-list">{genres}</div>
    </div>
  );
};
