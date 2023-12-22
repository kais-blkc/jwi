import './FilmSingle.scss';
import { FC, useEffect } from 'react';
import { getFilmById, getVideosById } from '@/redux/thunks/filmsThunks';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getImgPath } from '@/api';
import VoteAverage from '../global/VoteAverage';
import CurGenresSingle from '../global/CurGenresSingle';
import Fancybox from '../global/Fancybox';
import Trailers from '../global/Trailers';
import FilmSingleImgs from './FilmSingleImgs';
import FilmSingleSimilar from './FilmSingleSimilar';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

type FilmSinglePageParams = {
  id: string;
};

const FilmSinglePage: FC = () => {
  const dispatch = useAppDispatch();
  const { curFilm } = useAppSelector((state) => state.films);
  const params = useParams<FilmSinglePageParams>();
  const img = getImgPath(curFilm.poster_path, '500');
  const bgImg = getImgPath(curFilm.backdrop_path, '1280');

  useEffect(() => {
    dispatch(getFilmById(params.id || ''));
    dispatch(getVideosById(Number(params.id)));
    console.log(curFilm.id);
  }, [params.id]);

  return (
    <div
      className="film-single"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <section className="film-single__hero not-py">
        <div className="container">
          <div
            key={curFilm.id}
            data-id={curFilm.id}
            className="films-hero__item"
          >
            <div className="films-hero__item-img">
              <img
                className="img-cover"
                src={img}
                alt=""
              />
            </div>
            <div className="films-hero__item-info">
              <div>
                <div className="films-hero__item-title">{curFilm.title}</div>
                <div className="films-hero__item-desc">{curFilm.overview}</div>
              </div>

              <div className="films-hero__item-other">
                <CurGenresSingle film={curFilm} />
                <p>
                  <b>Дата выхода: </b>
                  <span>{curFilm.release_date}</span>
                </p>
                <p>
                  <b>Время: </b>
                  <span>{curFilm.runtime} минут</span>
                </p>
                <div className="films-hero__item-rate">
                  <VoteAverage film={curFilm} />
                </div>
              </div>

              <div className="film-btns">
                <Fancybox>
                  <Trailers film={curFilm} />
                </Fancybox>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="film-single__imgs slider-full-w">
        <div className="container">
          <Tabs
            defaultIndex={0}
            className="film-tabs"
          >
            <TabList>
              <Tab className="h3 btn btn-round">Фоны</Tab>
              <Tab className="h3 btn btn-round">Постеры</Tab>
            </TabList>

            <TabPanel>
              <FilmSingleImgs
                filmId={curFilm.id}
                imgsType="backdrops"
              />
            </TabPanel>

            <TabPanel>
              <FilmSingleImgs
                filmId={curFilm.id}
                imgsType="posters"
              />
            </TabPanel>
          </Tabs>
        </div>
      </section>

      <section className="film-single__imgs slider-full-w">
        <div className="container">
          <h3 className="h3">Похожие фильмы</h3>
          <FilmSingleSimilar filmId={curFilm.id} />
        </div>
      </section>
    </div>
  );
};

export default FilmSinglePage;
