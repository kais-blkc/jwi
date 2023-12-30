import 'swiper/css';
import './HeroFilms.scss';

import { FC, useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { REQ_LIST } from '@/api';
import HeroFilmsItem from './HeroFilmsItem';
import HeroFilmsBgItem from './HeroFilmsBgItem';
import { filmsApi } from '@/services/FilmsService';
import Loading from '@/components/Loading/Loading';
import Error from '@/components/global/Error';

const HeroFilms: FC = () => {
  const [curSlideIndex, setCurSlideIndex] = useState(0);
  const {
    data: nowPlayingFilms,
    isLoading,
    isError,
  } = filmsApi.useGetFilmListQuery(REQ_LIST.popular);

  const HeroFilmsBgItemList = nowPlayingFilms?.map((film, index) => {
    return (
      <HeroFilmsBgItem
        film={film}
        curSlideIndex={curSlideIndex}
        index={index}
        key={film.id}
      />
    );
  });

  const HeroFilmsList = nowPlayingFilms?.map((film, index) => {
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
    <>
      {isError && <Error />}
      {isLoading && <Loading />}

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
    </>
  );
};

export default HeroFilms;
