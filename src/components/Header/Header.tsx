import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Header.scss';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header>
      <div className="container">
        <ul className="navbar">
          <li>
            <Link to={'/'}>
              <FontAwesomeIcon icon={['fas', 'home']}></FontAwesomeIcon>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
