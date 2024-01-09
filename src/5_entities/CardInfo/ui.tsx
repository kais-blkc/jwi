import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getImgPath } from '@/6_shared/api';

interface IFilmsItemProps {
  id: number;
  poster: string | undefined;
  linkTo: string;
  children?: React.ReactNode;
  index?: number;
}

export const CardInfo: FC<IFilmsItemProps> = ({
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
      className="films__item"
    >
      <div className="films__item-img">
        <img
          className="img-cover"
          src={poster}
          alt=""
        />
      </div>

      <div className="films__item-info">{children}</div>
    </Link>
  );
};
