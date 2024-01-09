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
  cast?: ICast[];
}

interface IFilmVideo {
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
}

export interface ICast {
  id: number;
  name: string;
  character: string;
  profile_path: string;
  known_for_department: string;
}

export interface IFilmImg {
  file_path: string;
}
export interface IFilmImgList {
  backdrops: IFilmImg[];
  logos: IFilmImg[];
  posters: IFilmImg[];
}
export interface IFilmGenre {
  id: number;
  name: 'string';
}

export interface IAllGenres {
  number: string;
}

export interface ITv {
  id: number;
  name: string;
  overview: string;
  genre_ids: number[];
  poster_path: string;
  vote_average: number;
  original_name: string;
  backdrop_path: string;
  origin_country: string[];
  first_air_date: string;
  last_air_date: string;
  genres: IFilmGenre[] | [];
  runtime?: number;
  videos?: IFilmVideo[];
  images?: IFilmImgList;
  similar?: IFilm[];
  cast?: ICast[];
  episode_run_time: number[];
  number_of_episodes: number;
  number_of_seasons: number;
}
