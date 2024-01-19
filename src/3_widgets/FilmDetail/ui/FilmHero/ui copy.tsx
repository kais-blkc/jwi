import { getImgPath } from '@/6_shared/api';
import { FC, ReactNode } from 'react';
import { EImgSizes } from '@/6_shared/config';
import { FadeIn } from '@/6_shared/ui/Animate';

interface IFilmHeroProps {
  id: number;
  poster: string | undefined;
  bg: string | undefined;
  title: string;
  overview: string;
  children?: ReactNode;
}

export const FilmHero: FC<IFilmHeroProps> = ({
  id,
  poster,
  bg,
  title,
  overview,
  children,
}) => {
  const bgSrc = getImgPath(bg, EImgSizes.large);
  const posterSrc = getImgPath(poster, EImgSizes.medium);
  const img = window.innerWidth > 767 ? posterSrc : bgSrc;

  return (
    <FadeIn>
      <section className="film-single__hero not-py">
        <div className="container">
          <div
            key={id}
            data-id={id}
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
                <div className="films-hero__item-title">{title}</div>
                <div className="films-hero__item-desc">{overview}</div>
              </div>

              <div className="films-hero__item-other">{children}</div>

              {/* {film.videos && (
              <div className="film-btns">
                <Fancybox>
                  <Trailers
                    filmId={id}
                    filmVideos={film.videos}
                  />
                </Fancybox>
              </div>
            )} */}
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
};
