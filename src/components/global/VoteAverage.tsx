import { FC } from 'react';
import { IFilm } from '@/types';

interface IVoteAverageProps {
  film: IFilm;
  title?: boolean;
  index?: number;
}

const VoteAverage: FC<IVoteAverageProps> = ({ film, title = true }) => {
  let VAClasses: string = 'red';
  const voteAverage = film.vote_average
    ? Number(film.vote_average.toFixed(1))
    : 0;

  if (voteAverage >= 7) VAClasses = 'green';
  else if (voteAverage >= 5) VAClasses = 'orange';

  return (
    <div className="film-item-rate">
      {title ? <b>Оценка: </b> : ''}
      <span className={VAClasses}>{voteAverage}</span>
    </div>
  );
};

export default VoteAverage;
