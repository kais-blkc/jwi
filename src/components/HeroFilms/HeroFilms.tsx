import 'swiper/css';
import './HeroFilms.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import { FC, useState } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks';

import { getNowPlayingFilms } from '@/redux/thunks/filmsThunks';
import HeroFilmsBgItem from './HeroFilmsBgItem';
import HeroFilmsItem from './HeroFilmsItem';

const HeroFilms: FC = () => {
  const dispatch = useAppDispatch();
  const [curSlideIndex, setCurSlideIndex] = useState(0);
  const nowPlayingFilms = useAppSelector(
    (state) => state.films.films.nowPlaying
  );

  useEffect(() => {
    dispatch(getNowPlayingFilms());
  }, []);

  const HeroFilmsBgItemList = nowPlayingFilms.map((film, index) => {
    return (
      <HeroFilmsBgItem
        film={film}
        curSlideIndex={curSlideIndex}
        index={index}
        key={film.id}
      />
    );
  });

  const HeroFilmsList = nowPlayingFilms.map((film, index) => {
    return (
      <SwiperSlide key={film.id}>
        <HeroFilmsItem
          key={film.id}
          film={film}
          index={index}
        />
      </SwiperSlide>
    );
  });

  return (
    <section className="films-hero not-py not-px">
      <div className="films-hero-wrapper">
        <div className="films-hero__bgs">{HeroFilmsBgItemList}</div>

        <div className="container">
          <Swiper
            className="films-hero__list"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={(swiper) => setCurSlideIndex(swiper.activeIndex)}
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

export default HeroFilms;
