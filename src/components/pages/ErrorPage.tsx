import { FC } from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage: FC = () => {
  const error = useRouteError();

  return (
    <section className="error-page">
      <div className="container">
        <h1>Ooops!</h1>
        <h2>Page is not defined :(</h2>

        {error instanceof Error ? <b>{error.message}</b> : ''}

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
