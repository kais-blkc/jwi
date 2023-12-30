import './FilmsRow.scss';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import { FC } from 'react';

import FilmsItem from './FilmsItem';
import { IFilm } from '@/models/IFilm';

interface IFilmsRowProps {
  films: IFilm[];
  getMethod?: Function;
  title?: string;
}

const FilmsRow: FC<IFilmsRowProps> = ({ films, title = '' }) => {
  const filmsRowList = films.map((film, index) => {
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
        <h2>{title}</h2>

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
