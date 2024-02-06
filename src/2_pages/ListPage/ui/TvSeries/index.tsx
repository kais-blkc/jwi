import { FilmsRow } from '@/3_widgets/FilmDetail';
import { ETvListTypes, tvApi } from '@/3_widgets/TvDetail';
import { EQueryTypes } from '@/3_widgets/TvDetail/model/movieTypes';
import { Pagination } from '@/5_entities/Pagination';
import { Loading } from '@/6_shared/ui/Loading';
import { FC } from 'react';
import { useParams } from 'react-router-dom';

type TUrlParamsParams = {
  page: string;
};

export const ListTvSeries: FC = () => {
  const urlParams = useParams<TUrlParamsParams>();
  const page = urlParams.page ? +urlParams.page : 1;

  const { data, isLoading } = tvApi.useGetTvListQuery({
    TvListType: ETvListTypes.popular,
    page,
  });

  const tv = data?.results;
  const total_pages = data?.total_pages;

  return (
    <>
      {isLoading && <Loading />}
      {tv && (
        <FilmsRow
          title='Сериалы'
          list={tv}
          movieType={EQueryTypes.tv}
        />
      )}

      {total_pages && (
        <Pagination
          total_pages={total_pages}
          page={page}
          link='/tvs/'
        />
      )}
    </>
  );
};
