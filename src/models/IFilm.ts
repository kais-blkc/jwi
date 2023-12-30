export interface IFilm {
  id: number;
  title: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string;
  vote_average?: number;
  genre_ids: number[];
  genres: IFilmGenre[] | [];
  runtime?: number;
  videos?: IFilmVideo[];
  images?: IFilmImgList;
  similar?: IFilm[];
  cast?: IFilmSingleCast[];
}

interface IFilmImg {
  file_path: string;
}

interface IFilmGenre {
  id: number;
  name: 'string';
}

interface IFilmImgList {
  backdrops: IFilmImg[];
  logos: IFilmImg[];
  posters: IFilmImg[];
}

interface IFilmVideo {
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
}

interface IFilmSingleCast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  known_for_department: string;
}
