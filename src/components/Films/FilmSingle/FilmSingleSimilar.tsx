import { FC } from 'react';
import FilmsItem from '../FilmsRow/FilmsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { filmsApi } from '@/services/FilmsService';
import Error from '@/components/global/Error';

interface IFilmSingleSimilarProps {
  filmId: number;
}

const FilmSingleSimilar: FC<IFilmSingleSimilarProps> = ({ filmId }) => {
  const { data: similar, isError } =
    filmsApi.useGetSimilarFilmsByIdQuery(filmId);

  const similarRowList = similar?.map((film, index) => {
    return (
      <SwiperSlide key={index}>
        <FilmsItem
          key={film.id}
          film={film}
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      {isError && <Error />}
      <Swiper
        className="films-row "
        slidesPerGroup={4}
        spaceBetween={25}
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 'auto',
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          1000: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 6,
          },
        }}
      >
        {similarRowList}
      </Swiper>
    </>
  );
};

export default FilmSingleSimilar;
