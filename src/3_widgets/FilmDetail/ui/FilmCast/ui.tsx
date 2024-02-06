import './styles.scss';
import { FC } from 'react';
import { getImgPath } from '@/6_shared/api/url';
import { Error } from '@/6_shared/ui/Error';
import { SwiperSlide } from 'swiper/react';
import { CardInfo } from '@/5_entities/CardInfo';
import { SliderSwiper } from '@/6_shared/ui/SliderSwiper';
import { IApiParams, rtkApi } from '@/6_shared/api';
import { FadeIn } from '@/6_shared/ui/Animate';

interface IFilmSingleCastProps {
  queryArgs: IApiParams;
}

export const FilmCast: FC<IFilmSingleCastProps> = ({ queryArgs }) => {
  const { data: cast, isError } = rtkApi.useGetCastByIdQuery(queryArgs);

  const castList = cast?.map((item, index) => {
    const img = getImgPath(item.profile_path);

    return (
      <SwiperSlide key={index}>
        <CardInfo
          id={index}
          poster={img}
          linkTo={`/person/${item.id}`}
        >
          <p>
            <b>{item.name}</b>
          </p>
          <p>{item.character}</p>
        </CardInfo>
      </SwiperSlide>
    );
  });

  return (
    <>
      {isError && <Error />}

      <FadeIn>
        <section className='film-single__cast slider-full-w'>
          <div className='container'>
            <h3 className='h3'>Актерский состав</h3>

            <div className='cast-list'>
              <SliderSwiper>{castList}</SliderSwiper>
            </div>
          </div>
        </section>
      </FadeIn>
    </>
  );
};
