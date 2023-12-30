import { FC } from 'react';
import FilmsRow from '@components/Films/FilmsRow/FilmsRow';
import { filmsApi } from '@/services/FilmsService';
import { REQ_LIST } from '@/api';
import Error from '@components/global/Error';

const TvPopular: FC = () => {
  const {
    data: tvPopularList,
    isLoading,
    isError,
  } = filmsApi.useGetFilmListQuery(REQ_LIST.tvPopular);

  return (
    <>
      {isError && <Error />}
      {tvPopularList && (
        <FilmsRow
          films={tvPopularList}
          title="Сериалы"
        />
      )}
    </>
  );
};

export default TvPopular;
