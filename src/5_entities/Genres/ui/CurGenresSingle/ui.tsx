import { FC } from 'react';
import { Genre } from '@/6_shared/ui/Genre';

interface ISingleGenres {
  id: number;
  name: string;
}

interface ICurGenresProps {
  curGenres: ISingleGenres[];
  title?: boolean;
}

export const CurGenresSingle: FC<ICurGenresProps> = ({
  curGenres,
  title = true,
}) => {
  const genres = curGenres.map((item, index) => {
    if (item === undefined) {
      return <span key={index}></span>;
    }

    return (
      <Genre
        key={index}
        title={item.name}
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
