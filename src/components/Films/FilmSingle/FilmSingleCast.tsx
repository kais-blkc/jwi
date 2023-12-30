import { getImgPath } from '@/api';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { filmsApi } from '@/services/FilmsService';
import Error from '@/components/global/Error';

interface IFilmSingleCastProps {
  filmId: number;
}

const FilmSingleCast: FC<IFilmSingleCastProps> = ({ filmId }) => {
  const { data: cast, isError } = filmsApi.useGetCastFilmsByIdQuery(filmId);

  const castList = cast?.map((item, index) => {
    const img = getImgPath(item.profile_path);

    return (
      <SwiperSlide key={index}>
        <div className="cast-item films__item">
          <div className="films__item-img">
            <img
              className="img-cover"
              src={img}
              alt=""
            />
          </div>
          <div className="films__item-info">
            <div className="films__item-title">
              <b>{item.name}</b>
            </div>
            <div className="films__item-desc">{item.character}</div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <>
      {isError && <Error />}

      <div className="cast-list">
        <Swiper
          className="films-row"
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
          {castList}
        </Swiper>
      </div>
    </>
  );
};

export default FilmSingleCast;
