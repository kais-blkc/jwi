import { FC } from 'react';
import { FilmsRow } from '@/3_widgets/FilmDetail';
import { Loading } from '@/6_shared/ui/Loading';
import { Error } from '@/6_shared/ui/Error';
import { tvApi } from '@/3_widgets/TvDetail/api';
import { ETvListTypes } from '@/3_widgets/TvDetail/model';
import { EQueryTypes } from '@/3_widgets/TvDetail/model/movieTypes';
import { MoreFilms } from '@/6_shared/ui/MoreFilms';

export const TvSeries: FC = () => {
  const { data, isLoading, isError } = tvApi.useGetTvListQuery({
    TvListType: ETvListTypes.popular,
  });
  const tv = data?.results;

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error />}
      {tv && (
        <>
          <FilmsRow
            list={tv}
            title='Сериалы'
            movieType={EQueryTypes.tv}
            rowSlider={false}
            itemsCount={10}
          />

          <MoreFilms link={'tvs/'} />
        </>
      )}
    </>
  );
};
