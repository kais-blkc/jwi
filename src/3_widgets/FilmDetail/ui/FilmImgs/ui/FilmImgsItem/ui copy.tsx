import { FC } from 'react';
import { IFilmImg } from '@/6_shared/model';
import { getImgPath } from '@/6_shared/api';

// Swiper
import 'swiper/css/navigation';
import { SwiperSlide } from 'swiper/react';
import { Fancybox } from '@/6_shared/ui/Fancybox';
import { filmsApi } from '@/3_widgets/FilmDetail/api';
import { SliderSwiper } from '@/6_shared/ui/SliderSwiper';

type TImgTypes = 'backdrops' | 'logos' | 'posters';

interface IFilmSingleImgsProps {
  filmId: number;
  imgsType: TImgTypes;
}

export const FilmImgsItem: FC<IFilmSingleImgsProps> = ({
  filmId,
  imgsType,
}) => {
  const { data: curImgs, isLoading } = filmsApi.useGetImagesByIdQuery(filmId);

  if (curImgs == undefined) return <div></div>;

  const backdrops = curImgs[imgsType].map((item: IFilmImg, index: number) => {
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
      <SliderSwiper
        classes="backdrops film-single__img-slider"
        sliderPerView={4}
      >
        {isLoading && 'Loading...'}
        {backdrops}
      </SliderSwiper>
    </Fancybox>
  );
};
