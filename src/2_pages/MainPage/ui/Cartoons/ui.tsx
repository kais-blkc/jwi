import { FC } from 'react';
import { Loading } from '@/6_shared/ui/Loading';
import { Error } from '@/6_shared/ui/Error';
import { FilmsRow } from '@/3_widgets/FilmDetail';
import { filmsApi } from '@/3_widgets/FilmDetail/api';
import { EMovieTypes } from '@/3_widgets/TvDetail/model/movieTypes';

export const Cartoons: FC = () => {
  const {
    data: cartoons,
    isLoading,
    isError,
  } = filmsApi.useGetFilmsDiscoverQuery(16);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {cartoons && (
        <FilmsRow
          list={cartoons}
          title="Мультфильмы"
          movieType={EMovieTypes.movies}
        />
      )}
    </>
  );
};
