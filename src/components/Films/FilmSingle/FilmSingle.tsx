import './FilmSingle.scss';
import { filmsApi } from '@/services/FilmsService';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { getImgPath } from '@/api';
import CurGenresSingle from '@/components/global/CurGenresSingle';
import VoteAverage from '@/components/global/VoteAverage';
import Fancybox from '@/components/global/Fancybox';
import Trailers from '@/components/global/Trailers';
import Loading from '@/components/Loading/Loading';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import FilmSingleImgs from './FilmSingleImgs';
import FilmSingleCast from './FilmSingleCast';
import FilmSingleSimilar from './FilmSingleSimilar';

type FilmSinglePageParams = {
  id: string;
};

const FilmSinglePage: FC = () => {
  const params = useParams<FilmSinglePageParams>();
  if (!params.id) return;

  const {
    data: film,
    isLoading,
    error,
  } = filmsApi.useGetFilmByIdQuery(params.id);

  const bgImg = getImgPath(film?.backdrop_path, '1280');
  const poster = getImgPath(film?.poster_path, '780');
  const img = window.innerWidth > 767 ? poster : bgImg;

  return (
    <>
      {isLoading && <Loading />}
      {error && <p>Some Error</p>}
      {film && (
        <div
          className="film-single"
          style={{
            backgroundImage: `url(${bgImg})`,
          }}
        >
          <section className="film-single__hero not-py">
            <div className="container">
              <div
                key={film.id}
                data-id={film.id}
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
                    <div className="films-hero__item-title">{film.title}</div>
                    <div className="films-hero__item-desc">{film.overview}</div>
                  </div>

                  <div className="films-hero__item-other">
                    <CurGenresSingle film={film} />
                    <p>
                      <b>Дата выхода: </b>
                      <span>{film.release_date}</span>
                    </p>
                    <p>
                      <b>Время: </b>
                      <span>{film.runtime} минут</span>
                    </p>
                    <div className="films-hero__item-rate">
                      <VoteAverage film={film} />
                    </div>
                  </div>

                  <div className="film-btns">
                    <Fancybox>
                      <Trailers film={film} />
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
                    filmId={film.id}
                    imgsType="backdrops"
                  />
                </TabPanel>

                <TabPanel>
                  <FilmSingleImgs
                    filmId={film.id}
                    imgsType="posters"
                  />
                </TabPanel>
              </Tabs>
            </div>
          </section>

          <section className="film-single__cast slider-full-w">
            <div className="container">
              <h3 className="h3">Актерский состав</h3>
              <FilmSingleCast filmId={film.id} />
            </div>
          </section>

          <section className="film-single__imgs slider-full-w">
            <div className="container">
              <h3 className="h3">Похожие фильмы</h3>
              <FilmSingleSimilar filmId={film.id} />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default FilmSinglePage;
