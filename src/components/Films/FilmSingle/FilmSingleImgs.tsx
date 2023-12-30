import { FC, useEffect } from 'react';
import { TFilmImg } from '@/types';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { getImagesById } from '@/redux/thunks/filmsThunks';
import { getImgPath } from '@/api';

// Swiper
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Fancybox from '@/components/global/Fancybox';

type TImgTypes = 'backdrops' | 'logos' | 'posters';

interface IFilmSingleImgsProps {
  filmId: number;
  imgsType: TImgTypes;
}

const FilmSingleImgs: FC<IFilmSingleImgsProps> = ({ filmId, imgsType }) => {
  const dispatch = useAppDispatch();
  const curImgs = useAppSelector((state) => state.films.curFilm.images);

  useEffect(() => {
    dispatch(getImagesById(filmId));
  }, [filmId]);

  if (curImgs == undefined) return <div></div>;

  const backdrops = curImgs[imgsType].map((item: TFilmImg, index: number) => {
    const imgPath = getImgPath(item.file_path);

    return (
      <SwiperSlide key={index}>
        <a
          href={imgPath}
          data-fancybox="film-single__img"
        >
          <img src={imgPath} />
        </a>
      </SwiperSlide>
    );
  });

  return (
    <Fancybox>
      <Swiper
        className="backdrops film-single__img-slider"
        modules={[Navigation]}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
          },
          1000: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            spaceBetween: 25,
          },
        }}
      >
        {backdrops}
      </Swiper>
    </Fancybox>
  );
};

export default FilmSingleImgs;
