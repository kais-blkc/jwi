import './styles.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Header: FC = () => {
  return (
    <header>
      <ul className="navbar">
        <li>
          <Link
            to={'/'}
            className="hover-opacity"
          >
            <FontAwesomeIcon icon={['fas', 'home']}></FontAwesomeIcon>
          </Link>
        </li>
      </ul>
    </header>
  );
};
