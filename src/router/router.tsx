import FilmSingle from '@/components/FilmSingle/FilmSingle';
import ErrorPage from '@/components/pages/ErrorPage';
import MainPage from '@/components/pages/MainPage';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export const router = createBrowserRouter([
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
]);
