import { FC } from 'react';
import { SwiperSlide } from 'swiper/react';
import { VoteAverageCount } from '@/6_shared/ui/VoteAverageCount';
import { SliderSwiper } from '@/6_shared/ui/SliderSwiper';
import { CardInfo } from '@/5_entities/CardInfo';
import { CurGenres } from '@/5_entities/Genres';
import { EImgSizes } from '@/6_shared/config';
import { IApiParams, getImgPath, rtkApi } from '@/6_shared/api';
import { EMovieTypes } from '@/3_widgets/TvDetail/model/movieTypes';
import { FadeIn } from '@/6_shared/ui/Animate';

interface IFilmSingleSimilarProps {
  queryArgs: IApiParams;
  curMovieType: EMovieTypes;
}

export const FilmSimilar: FC<IFilmSingleSimilarProps> = ({
  queryArgs,
  curMovieType,
}) => {
  const { data: similar, isLoading } = rtkApi.useGetSimilarByIdQuery(queryArgs);

  const similarRowList = similar?.map((film, index) => {
    const posterSrc = getImgPath(film.poster_path, EImgSizes.small);
    const curTitle = 'title' in film ? film.title : film.name;

    return (
      <SwiperSlide key={index}>
        <CardInfo
          id={film.id}
          linkTo={`/${curMovieType}/${film.id}`}
          poster={posterSrc}
          key={film.id}
        >
          <CurGenres
            genre_ids={film.genre_ids}
            title={false}
          />
          <VoteAverageCount vote={film.vote_average} />
          <div className="cardinfo-title">{curTitle}</div>
        </CardInfo>
      </SwiperSlide>
    );
  });

  return (
    <>
      {isLoading && 'Loading...'}

      <FadeIn>
        <section className="film-single__imgs slider-full-w">
          <div className="container">
            <h3 className="h3">Похожие фильмы</h3>
            <SliderSwiper>{similarRowList}</SliderSwiper>
          </div>
        </section>
      </FadeIn>
    </>
  );
};
