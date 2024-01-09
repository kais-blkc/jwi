import './styles.scss';
import { FC } from 'react';

interface IVoteAverageProps {
  vote: number | undefined;
  index?: number;
}

enum EVoteClasses {
  green = 'green',
  orange = 'orange',
  red = 'red',
}

const getVoteAverage = (vote: number) => {
  if (vote >= 7) return EVoteClasses.green;
  if (vote >= 5) return EVoteClasses.orange;
  return EVoteClasses.red;
};

export const VoteAverageCount: FC<IVoteAverageProps> = ({ vote }) => {
  const voteAverage = vote ? +vote.toFixed(1) : 0;
  const VAClasses = getVoteAverage(voteAverage);

  return <span className={`vote-average ${VAClasses}`}>{voteAverage}</span>;
};
