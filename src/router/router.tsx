import FilmSingle from '@/components/FilmSingle/FilmSingle';
import ErrorPage from '@/components/pages/ErrorPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Root from '@/Root';
import MainPage from '@/components/pages/MainPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <MainPage />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/movies/',
          element: <Navigate to="/" />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/movies/:id',
          element: <FilmSingle />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  { basename: '/jwi/' }
);
