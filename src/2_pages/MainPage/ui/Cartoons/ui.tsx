import { FC } from 'react';
import { Loading } from '@/6_shared/ui/Loading';
import { Error } from '@/6_shared/ui/Error';
import { FilmsRow } from '@/3_widgets/FilmDetail';
import { filmsApi } from '@/3_widgets/FilmDetail/api';
import { EQueryTypes } from '@/3_widgets/TvDetail/model/movieTypes';
import { MoreFilms } from '@/6_shared/ui/MoreFilms';

export const Cartoons: FC = () => {
  const { data, isLoading, isError } = filmsApi.useGetFilmsDiscoverQuery({
    genreId: 16,
  });

  const cartoons = data?.results;

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {cartoons && (
        <>
          <FilmsRow
            list={cartoons}
            title='Мультфильмы'
            movieType={EQueryTypes.movie}
            rowSlider={false}
            itemsCount={10}
          />

          <MoreFilms link={'/film_genre/16/1'} />
        </>
      )}
    </>
  );
};
