import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
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

export default Header;
