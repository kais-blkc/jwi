import { useAppDispatch, useAppSelector } from '@/hooks';
import { getSimilarFilmsById } from '@/redux/thunks/filmsThunks';
import { FC, useEffect } from 'react';
import FilmsItem from '../FilmsRow/FilmsItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

interface IFilmSingleSimilarProps {
  filmId: number;
}

const FilmSingleSimilar: FC<IFilmSingleSimilarProps> = ({ filmId }) => {
  const dispatch = useAppDispatch();
  const similar = useAppSelector((state) => state.films.curFilm.similar);

  useEffect(() => {
    dispatch(getSimilarFilmsById(filmId));
  }, [filmId]);

  if (similar === undefined) return false;

  const similarRowList = similar.map((film, index) => {
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
  );
};

export default FilmSingleSimilar;
