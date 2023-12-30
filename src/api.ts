import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { AuthorizationData } from './api-datas';
import { IImgSizes } from './types';

export const IMG_URL = `http://image.tmdb.org/t/p/`;
export const BASE_URL = `https://api.themoviedb.org/3/`;

export const REQ_LIST = {
  popular: 'movie/popular',
  nowPlaying: 'movie/now_playing',
  topRated: 'movie/top_rated',
  upcoming: 'movie/upcoming',
  genreList: 'genre/movie/list',
  tvPopular: 'tv/popular',
  genreId: 'discover/movie',
};

export const fetchParams = {
  headers: {
    Authorization: AuthorizationData,
  },
};

export const getQueryStr = (query: string, lang = 'language=ru'): string => {
  let url = `${BASE_URL}${query}`;
  if (lang) url += `?${lang}`;
  return url;
};

export const getImgPath = (
  query: string | undefined,
  size: IImgSizes = '500'
): string => {
  return query ? `${IMG_URL}w${size}${query}` : '';
};

// RTK Query
export const rtkApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', AuthorizationData);
    },
  }),
  endpoints: () => ({}),
});
