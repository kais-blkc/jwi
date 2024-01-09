import './styles.scss';
import { FC, ReactNode, useEffect, useRef } from 'react';
import { Swiper, SwiperRef } from 'swiper/react';
import { Navigation } from 'swiper/modules';

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
      spaceBetween={25}
      modules={[Navigation]}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 'auto',
        },
        768: {
          slidesPerView: 4,
          slidesPerGroup: 4,
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
