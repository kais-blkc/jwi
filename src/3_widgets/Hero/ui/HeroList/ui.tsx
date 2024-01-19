import 'swiper/css';
import './styles.scss';

import { FC, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { HeroItem } from '..';
import { HeroBg } from '..';
import { IFilm } from '@/6_shared/model';

interface IHeroListProps {
  filmsList: IFilm[];
}

export const HeroList: FC<IHeroListProps> = ({ filmsList }) => {
  const [curSlideIndex, setCurSlideIndex] = useState(0);

  const HeroFilmsBgItemList = filmsList?.map((film, index) => {
    return (
      <HeroBg
        filmId={film.id}
        backdropPath={film.backdrop_path}
        curSlideIndex={curSlideIndex}
        index={index}
        key={film.id}
      />
    );
  });

  const HeroFilmsList = filmsList?.map((film, index) => {
    return (
      <SwiperSlide key={film.id}>
        <HeroItem
          key={film.id}
          film={film}
          index={index}
        />
      </SwiperSlide>
    );
  });

  return (
    <section className='films-hero not-py not-px'>
      <div className='films-hero-wrapper'>
        <div className='films-hero__bgs'>{HeroFilmsBgItemList}</div>

        <div className='container'>
          <Swiper
            className='films-hero__list'
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => setCurSlideIndex(swiper.activeIndex)}
            autoHeight={true}
            autoplay={{
              delay: 5000,
            }}
            modules={[Autoplay]}
          >
            {HeroFilmsList}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
