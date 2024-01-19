import './styles.scss';
import { FilmsRow, filmsApi } from '@/3_widgets/FilmDetail';
import { EQueryTypes } from '@/3_widgets/TvDetail/model/movieTypes';
import { Pagination } from '@/5_entities/Pagination';
import { useAppSelector } from '@/6_shared/lib/hooks';
import { Loading } from '@/6_shared/ui/Loading';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

type TUrlParamsParams = {
  page: string;
  genreId: string;
};

export const ListGenre: FC = () => {
  const allGenres = useAppSelector((state) => state.films.allGenres);
  const urlParams = useParams<TUrlParamsParams>();
  const genreId = urlParams.genreId ? +urlParams.genreId : 0;
  const page = urlParams.page ? +urlParams.page : 1;
  const genreName = (allGenres as Array<any>)[genreId];

  const { data, isLoading } = filmsApi.useGetFilmsDiscoverQuery({
    genreId,
    page,
  });
  const films = data?.results;
  const total_pages = data?.total_pages;

  return (
    <div className='page-genres'>
      {isLoading && <Loading />}
      {films && (
        <FilmsRow
          title={genreName}
          list={films}
          movieType={EQueryTypes.movie}
        />
      )}

      {total_pages && (
        <Pagination
          total_pages={total_pages}
          page={page}
          link={`/film_genre/${genreId}/`}
        />
      )}
    </div>
  );
};
