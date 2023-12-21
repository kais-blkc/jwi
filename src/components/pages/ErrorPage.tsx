import { FC } from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: FC = () => {
  return (
    <section className="error-page">
      <div className="container">
        <h1>Ooops!</h1>
        <h2>Page is not defined :(</h2>

        <Link
          to="/"
          className=""
        >
          Go to Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
