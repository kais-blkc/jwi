import { FC, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IFilm } from '@/models/IFilm';

interface ITrailersProps {
  film: IFilm;
  title?: boolean;
  single?: boolean;
  index?: number;
}

const Trailers: FC<ITrailersProps> = ({ film }) => {
  let videos;

  useEffect(() => {}, [film.id]);

  if (film.videos) {
    videos = film.videos.map((item, index) => {
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

export default Trailers;
