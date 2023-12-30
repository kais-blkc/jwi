import { FC } from 'react';
import FilmsRow from '@components/Films/FilmsRow/FilmsRow';
import { filmsApi } from '@/services/FilmsService';
import { REQ_LIST } from '@/api';
import Error from '@/components/global/Error';

const FilmsPopular: FC = () => {
  const {
    data: popularFilms,
    isLoading,
    isError,
  } = filmsApi.useGetFilmListQuery(REQ_LIST.popular);

  return (
    <>
      {isError && <Error />}
      {popularFilms && (
        <FilmsRow
          films={popularFilms}
          title="Популярные фильмы"
        />
      )}
    </>
  );
};

export default FilmsPopular;
