import { FC } from 'react';
import { REQ_LIST } from '@/6_shared/config';
import { Loading } from '@/6_shared/ui/Loading';
import { Error } from '@/6_shared/ui/Error';
import { FilmsRow } from '@/3_widgets/FilmDetail';
import { filmsApi } from '@/3_widgets/FilmDetail/api';
import { EMovieTypes } from '@/3_widgets/TvDetail/model/movieTypes';

export const Popular: FC = () => {
  const {
    data: popularFilms,
    isLoading,
    isError,
  } = filmsApi.useGetFilmListQuery(REQ_LIST.popular);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {popularFilms && (
        <FilmsRow
          list={popularFilms}
          title="Фильмы"
          movieType={EMovieTypes.movies}
        />
      )}
    </>
  );
};
