import './FilmsRow.scss';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { FC, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { getPopularFilms } from '@/redux/thunks/filmsThunks';
import FilmsItem from './FilmsItem';

const FilmsRow: FC = () => {
  const dispatch = useAppDispatch();
  const popularFilms = useAppSelector((state) => state.films.films.popular);

  useEffect(() => {
    dispatch(getPopularFilms());
  }, []);

  const filmsRowList = popularFilms.map((film, index) => {
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
    <section className="films-row">
      <div className="container">
        <h2>Популярные фильмы</h2>

        <Swiper
          className="films-row__list"
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
          {filmsRowList}
        </Swiper>
      </div>
    </section>
  );
};

export default FilmsRow;
