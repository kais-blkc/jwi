import './styles.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

interface ICardInfoProps {
  id: number;
  poster: string | undefined;
  linkTo: string;
  children?: React.ReactNode;
  index?: number;
}

export const CardInfo: FC<ICardInfoProps> = ({
  id,
  linkTo,
  poster,
  children,
}) => {
  return (
    <Link
      to={linkTo}
      key={id}
      data-id={id}
      className='films__item cardinfo'
    >
      <div className='films__item-img'>
        <img
          className='img-cover'
          src={poster}
          alt=''
        />
      </div>

      <div className='films__item-info'>{children}</div>
    </Link>
  );
};
