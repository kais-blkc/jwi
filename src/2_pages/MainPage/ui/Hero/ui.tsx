import { FC } from 'react';
import { HeroList } from '@/3_widgets/Hero';
import { REQ_LIST } from '@/6_shared/config';
import { Loading } from '@/6_shared/ui/Loading';
import { Error } from '@/6_shared/ui/Error';
import { filmsApi } from '@/3_widgets/FilmDetail/api';

export const Hero: FC = () => {
  const { data, isLoading, isError } = filmsApi.useGetFilmListQuery(
    REQ_LIST.popular
  );

  return (
    <>
      {isError && <Error />}
      {isLoading && <Loading />}

      {data && <HeroList filmsList={data} />}
    </>
  );
};
