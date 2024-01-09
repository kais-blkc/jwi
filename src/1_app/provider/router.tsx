import { createBrowserRouter, Navigate } from 'react-router-dom';
import { SingleFilm, SingleTv } from '@/2_pages/SinglePage';
import { ErrorPage } from '@/2_pages/ErrorPage';
import { MainPage } from '@/2_pages/MainPage';
import { App } from '@/1_app';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
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
          element: <SingleFilm />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/tv/:id',
          element: <SingleTv />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  { basename: '/jwi/' }
);
