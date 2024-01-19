import './styles.scss';
import 'swiper/css/navigation';

import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { VoteAverageCount } from '@/6_shared/ui/VoteAverageCount';
import { SliderSwiper } from '@/6_shared/ui/SliderSwiper';
import { CardInfo } from '@/5_entities/CardInfo';
import { CurGenres } from '@/5_entities/Genres';
import { EImgSizes } from '@/6_shared/config';
import { getImgPath } from '@/6_shared/api';
import { IFilm, ITv } from '@/6_shared/model';
import { EQueryTypes } from '@/3_widgets/TvDetail/model/movieTypes';
import { FadeIn } from '@/6_shared/ui/Animate';

interface IFilmsRowProps {
  title: string;
  movieType: EQueryTypes;
  list: IFilm[] | ITv[];
  rowSlider?: boolean;
  itemsCount?: number;
}

export const FilmsRow: FC<IFilmsRowProps> = ({
  list,
  title,
  movieType,
  rowSlider = false,
  itemsCount = 20,
}) => {
  const filmsRowList = list.map((film, index) => {
    if (index >= itemsCount) return;

    const posterSrc = getImgPath(film.poster_path, EImgSizes.small);
    const curTitle = 'title' in film ? film.title : film.name;

    return (
      <SwiperSlide key={index}>
        <CardInfo
          key={film.id}
          id={film.id}
          linkTo={`/${movieType}/${film.id}`}
          poster={posterSrc}
        >
          <VoteAverageCount vote={film.vote_average} />
          <CurGenres
            genre_ids={film.genre_ids}
            title={false}
          />
          <div className='cardinfo-title'>{curTitle}</div>
        </CardInfo>
      </SwiperSlide>
    );
  });

  return (
    <section className='films-row-wrapper slider-full-w'>
      <FadeIn>
        <div className='container'>
          <h2>{title}</h2>
          {rowSlider ? (
            <SliderSwiper>{filmsRowList}</SliderSwiper>
          ) : (
            <div className='films-row not-slider'>{filmsRowList}</div>
          )}
        </div>
      </FadeIn>
    </section>
  );
};
