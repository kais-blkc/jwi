export interface IFilm {
  id: number;
  title: string;
  overview?: string;
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string;
  vote_average?: number;
  genre_ids: number[];
  genres: IGenre[] | [];
  runtime?: number;
  videos?: IVideo[];
  images?: TFilmImgs;
}

export type TFilmImg = {
  file_path: string;
};

export type TFilmImgs = {
  backdrops: TFilmImg[];
  logos: TFilmImg[];
  posters: TFilmImg[];
};

export interface IVideo {
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
}

export interface IGenre {
  id: number;
  name: 'string';
}

export type TAllGenres = {
  number: string;
};

export interface IInitialState {
  films: {
    nowPlaying: IFilm[];
    popular: IFilm[];
  };
  curFilm: IFilm;
  allGenres: TAllGenres | {};
  genresReady: boolean;
}

export type IImgSizes = '500' | '780' | '1280';
