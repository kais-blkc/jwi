import './styles.scss';
import { FC } from 'react';

interface IGenreProps {
  title?: string;
}

export const Genre: FC<IGenreProps> = ({ title }) => {
  return <span className="genre-item">{title}</span>;
};
