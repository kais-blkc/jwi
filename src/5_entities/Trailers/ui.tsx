import { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ITrailersProps {
  filmId: number;
  filmVideos: unknown;
  title?: boolean;
  single?: boolean;
  index?: number;
}

export const Trailers: FC<ITrailersProps> = ({ filmId, filmVideos }) => {
  let videos;

  console.log(filmVideos);

  useEffect(() => {}, [filmId]);

  if (filmVideos instanceof Array) {
    videos = filmVideos.map((item, index) => {
      return (
        <div
          className="film-video"
          key={index}
        >
          <a
            className="btn btn-round"
            data-fancybox="gallery"
            href={`https://www.youtube.com/watch?v=${item.key}`}
          >
            <span>Трейлер - {index + 1}</span>
            <FontAwesomeIcon icon={['fas', 'play']} />
          </a>
        </div>
      );
    });
  }

  return <>{videos}</>;
};
