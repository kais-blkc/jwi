import '../styles.scss';
import { FC } from 'react';
import { IApiParams, getImgPath } from '@/6_shared/api';
import { useParams } from 'react-router-dom';
import { filmsApi } from '@/3_widgets/FilmDetail/api';

import { Loading } from '@/6_shared/ui/Loading';
import { FilmHero } from '@/3_widgets/FilmDetail';
import { CurGenresSingle } from '@/5_entities/Genres';
import { VoteAverage } from '@/5_entities/VoteAverage';
import { Characteristic } from '@/6_shared/ui/Сharacteristic';
import { FilmImgs, FilmCast, FilmSimilar } from '@/3_widgets/FilmDetail';
import { EImgSizes } from '@/6_shared/config';
import { EMovieTypes } from '@/3_widgets/TvDetail/model/movieTypes';

type TSingleFilmParams = {
  id: string;
};

export const SingleFilm: FC = () => {
  const params = useParams<TSingleFilmParams>();
  if (!params.id) return;

  const { data: film, isLoading } = filmsApi.useGetFilmByIdQuery(params.id);
  const bg = getImgPath(film?.backdrop_path, EImgSizes.large);

  const curFilmArgs: IApiParams = {
    movieType: EMovieTypes.movie,
    filmId: +params.id,
  };

  return (
    <>
      {isLoading && <Loading />}
      {film && (
        <div
          className="film-single"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <FilmHero
            id={film.id}
            poster={film.poster_path}
            bg={film.backdrop_path}
            title={film.title}
            overview={film.overview || ''}
          >
            <CurGenresSingle curGenres={film.genres} />
            <Characteristic
              title="Дата выхода"
              text={film.release_date || ''}
            />
            <Characteristic
              title="Время"
              text={`${film.runtime} минут`}
            />
            <VoteAverage vote={film.vote_average} />
          </FilmHero>

          <FilmImgs queryArgs={curFilmArgs} />

          <FilmCast queryArgs={curFilmArgs} />

          <FilmSimilar
            queryArgs={curFilmArgs}
            curMovieType={EMovieTypes.movies}
          />
        </div>
      )}
    </>
  );
};
