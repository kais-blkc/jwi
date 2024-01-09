import '../styles.scss';
import { FC } from 'react';
import { IApiParams, getImgPath, rtkApi } from '@/6_shared/api';
import { useParams } from 'react-router-dom';
import { Loading } from '@/6_shared/ui/Loading';
import { FilmHero } from '@/3_widgets/FilmDetail';
import { CurGenresSingle } from '@/5_entities/Genres';
import { VoteAverage } from '@/5_entities/VoteAverage';
import { Characteristic } from '@/6_shared/ui/Сharacteristic';
import { FilmImgs, FilmCast, FilmSimilar } from '@/3_widgets/FilmDetail';
import { EImgSizes } from '@/6_shared/config';
import { tvApi } from '@/3_widgets/TvDetail';
import { EMovieTypes } from '@/3_widgets/TvDetail/model/movieTypes';

type TSingleFilmParams = {
  id: string;
};

export const SingleTv: FC = () => {
  const params = useParams<TSingleFilmParams>();
  if (!params.id) return;

  const { data: film, isLoading } = tvApi.useGetTvByIdQuery(params.id);
  const bg = getImgPath(film?.backdrop_path, EImgSizes.large);
  const curTvArgs: IApiParams = {
    movieType: EMovieTypes.tv,
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
            title={film.name}
            overview={film.overview || ''}
          >
            <CurGenresSingle curGenres={film.genres} />
            <Characteristic
              title="Дата первого эфира"
              text={film.first_air_date || ''}
            />
            <Characteristic
              title="Дата последнего эфира"
              text={film.last_air_date || ''}
            />
            <Characteristic
              title="Длительность серии"
              text={`${film.episode_run_time} минут`}
            />
            <Characteristic
              title="Всего сезонов"
              text={`${film.number_of_seasons}`}
            />
            <Characteristic
              title="Всего серий"
              text={`${film.number_of_episodes}`}
            />
            <VoteAverage vote={film.vote_average} />
          </FilmHero>

          <FilmImgs queryArgs={curTvArgs} />

          <FilmCast queryArgs={curTvArgs} />

          <FilmSimilar
            queryArgs={curTvArgs}
            curMovieType={EMovieTypes.tv}
          />
        </div>
      )}
    </>
  );
};
