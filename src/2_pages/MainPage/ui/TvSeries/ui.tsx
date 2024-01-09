import { FC } from 'react';
import { FilmsRow } from '@/3_widgets/FilmDetail';
import { Loading } from '@/6_shared/ui/Loading';
import { Error } from '@/6_shared/ui/Error';
import { tvApi } from '@/3_widgets/TvDetail/api';
import { ETvListTypes } from '@/3_widgets/TvDetail/model';
import { EMovieTypes } from '@/3_widgets/TvDetail/model/movieTypes';

export const TvSeries: FC = () => {
  const {
    data: tv,
    isLoading,
    isError,
  } = tvApi.useGetTvListQuery(ETvListTypes.popular);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {tv && (
        <FilmsRow
          list={tv}
          title="Сериалы"
          movieType={EMovieTypes.tv}
        />
      )}
    </>
  );
};
