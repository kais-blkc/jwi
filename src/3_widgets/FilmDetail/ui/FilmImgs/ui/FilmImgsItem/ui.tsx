import { FC } from 'react';
import { IFilmImg } from '@/6_shared/model';
import { IApiParams, getImgPath, rtkApi } from '@/6_shared/api';

// Swiper
import 'swiper/css/navigation';
import { SwiperSlide } from 'swiper/react';
import { Fancybox } from '@/6_shared/ui/Fancybox';
import { SliderSwiper } from '@/6_shared/ui/SliderSwiper';
import { EImgSizes } from '@/6_shared/config';

type TImgTypes = 'backdrops' | 'logos' | 'posters';

interface IFilmSingleImgsProps {
  queryArgs: IApiParams;
  imgsType: TImgTypes;
}

export const FilmImgsItem: FC<IFilmSingleImgsProps> = ({
  queryArgs,
  imgsType,
}) => {
  const { data: curImgs, isLoading } = rtkApi.useGetImgsByIdQuery(queryArgs);

  if (curImgs == undefined) return <div></div>;

  const backdrops = curImgs[imgsType].map((item: IFilmImg, index: number) => {
    const imgPath = getImgPath(item.file_path, EImgSizes.large);

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
