import { createBrowserRouter } from 'react-router-dom';
import { SingleFilm, SingleTv } from '@/2_pages/SinglePage';
import { ErrorPage } from '@/2_pages/ErrorPage';
import { MainPage } from '@/2_pages/MainPage';
import { App } from '@/1_app';
import { SinglePerson } from '@/2_pages/SinglePage/ui/SinglePerson';
import { ListMovies, ListTvSeries, ListGenre } from '@/2_pages/ListPage';

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
          path: '/movie/:id',
          element: <SingleFilm />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/movies/',
          element: <ListMovies />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/movies/:page',
          element: <ListMovies />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/tv/:id',
          element: <SingleTv />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/tvs/',
          element: <ListTvSeries />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/tvs/:page',
          element: <ListTvSeries />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/film_genre/:genreId/:page',
          element: <ListGenre />,
          errorElement: <ErrorPage />,
        },
        {
          path: '/person/:id',
          element: <SinglePerson />,
          errorElement: <ErrorPage />,
        },
      ],
    },
  ],
  { basename: '/jwi/' }
);
