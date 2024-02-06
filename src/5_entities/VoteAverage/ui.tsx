import { FC } from 'react';
import { VoteAverageCount } from '@/6_shared/ui/VoteAverageCount';

interface IVoteAverageProps {
  vote: number | undefined;
  index?: number;
}

export const VoteAverage: FC<IVoteAverageProps> = ({ vote }) => {
  return (
    <div className="film-item-rate">
      <b>Оценка: </b>
      <VoteAverageCount vote={vote} />
    </div>
  );
};
