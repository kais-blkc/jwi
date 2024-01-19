import './index.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface IMoreFilmsProps {
  link: string;
}

export const MoreFilms: FC<IMoreFilmsProps> = ({ link }) => {
  return (
    <div className='more-films'>
      <Link
        to={`${link}`}
        className='btn btn-round more-films-btn'
      >
        Смотреть все
      </Link>
    </div>
  );
};
