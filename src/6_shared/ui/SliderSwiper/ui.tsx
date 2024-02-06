import './styles.scss';
import 'swiper/css';
import 'swiper/css/grid';

import { FC, ReactNode, useEffect, useRef } from 'react';
import { Swiper, SwiperRef } from 'swiper/react';
import { Navigation, Grid } from 'swiper/modules';

interface ISliderSwiperProps {
  children: ReactNode;
  classes?: string;
  sliderPerView?: number;
}

export const SliderSwiper: FC<ISliderSwiperProps> = ({
  children,
  classes,
  sliderPerView = 6,
}) => {
  const swiperRef = useRef<SwiperRef>(null);

  useEffect(() => {
    if (swiperRef.current != null) {
      swiperRef.current.swiper.slideTo(0);
    }
  });

  return (
    <Swiper
      ref={swiperRef}
      initialSlide={0}
      className={'films-row ' + classes}
      modules={[Navigation, Grid]}
      navigation={true}
      spaceBetween={15}
      grid={{
        rows: 2,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          slidesPerGroup: 2,
          // spaceBetween: 15,
        },
        540: {
          slidesPerView: 3,
          slidesPerGroup: 3,
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
          // spaceBetween: 25,
        },
        1000: {
          slidesPerView: sliderPerView,
          slidesPerGroup: sliderPerView,
        },
        1200: {
          slidesPerView: sliderPerView,
          slidesPerGroup: sliderPerView,
        },
      }}
    >
      {children}
    </Swiper>
  );
};
