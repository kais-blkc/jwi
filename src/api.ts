import { AuthorizationData } from './api-datas';
import { IImgSizes } from './types';

export const IMG_URL = `http://image.tmdb.org/t/p/`;
export const BASE_URL = `https://api.themoviedb.org/3/`;

export const MOVE_LIST = {
  popular: 'movie/popular',
  nowPlaying: 'movie/now_playing',
  topRated: 'movie/top_rated',
  upcoming: 'movie/upcoming',
  genreList: 'genre/movie/list',
};

export const fetchParams = {
  headers: {
    Authorization: AuthorizationData,
  },
};

export const getQueryStr = (
  query: string,
  lang = 'language=ru',
  options = ''
): string => {
  return `${BASE_URL}${query}?${lang}&${options}`;
};

export const getImgPath = (
  query: string | undefined,
  size: IImgSizes = '500'
): string => {
  return query ? `${IMG_URL}w${size}${query}` : '';
};