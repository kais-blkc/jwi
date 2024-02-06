import { FilmsRow, filmsApi } from '@/3_widgets/FilmDetail';
import { filmType } from '@/3_widgets/FilmDetail';
import { EQueryTypes } from '@/3_widgets/TvDetail/model/movieTypes';
import { Pagination } from '@/5_entities/Pagination';
import { Loading } from '@/6_shared/ui/Loading';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

type TUrlParamsParams = {
  page: string;
};

export const ListMovies: FC = () => {
  const urlParams = useParams<TUrlParamsParams>();
  const page = urlParams.page ? +urlParams.page : 1;

  const { data, isLoading } = filmsApi.useGetFilmListQuery({
    queryStr: filmType.popular,
    page,
  });
  const films = data?.results;
  const total_pages = data?.total_pages;

  return (
    <>
      {isLoading && <Loading />}
      {films && (
        <FilmsRow
          title='Фильмы'
          list={films}
          movieType={EQueryTypes.movie}
        />
      )}

      {total_pages && (
        <Pagination
          total_pages={total_pages}
          page={page}
          link='/movies/'
        />
      )}
    </>
  );
};
