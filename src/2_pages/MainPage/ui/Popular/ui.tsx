import { FC } from 'react';
import { REQ_LIST } from '@/6_shared/config';
import { Loading } from '@/6_shared/ui/Loading';
import { Error } from '@/6_shared/ui/Error';
import { FilmsRow } from '@/3_widgets/FilmDetail';
import { filmsApi } from '@/3_widgets/FilmDetail/api';
import { EQueryTypes } from '@/3_widgets/TvDetail/model/movieTypes';
import { MoreFilms } from '@/6_shared/ui/MoreFilms';

export const Popular: FC = () => {
  const { data, isLoading, isError } = filmsApi.useGetFilmListQuery({
    queryStr: REQ_LIST.popular,
  });

  const popularFilms = data?.results;

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {popularFilms && (
        <>
          <FilmsRow
            list={popularFilms}
            title='Фильмы'
            movieType={EQueryTypes.movie}
            rowSlider={false}
            itemsCount={10}
          />

          <MoreFilms link={'/movies/'} />
        </>
      )}
    </>
  );
};
