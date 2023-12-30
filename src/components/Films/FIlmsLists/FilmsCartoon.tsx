import { FC } from 'react';
import FilmsRow from '@/components/Films/FilmsRow/FilmsRow';
import { filmsApi } from '@/services/FilmsService';
import Error from '@/components/global/Error';

const FilmsCartoon: FC = () => {
  const { data: cartoons, isError } = filmsApi.useGetFilmListByIdQuery(16);

  return (
    <>
      {isError && <Error />}
      {cartoons && (
        <FilmsRow
          films={cartoons}
          title="Мультфильмы"
        />
      )}
    </>
  );
};

export default FilmsCartoon;
