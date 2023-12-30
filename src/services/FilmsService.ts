import { BASE_URL, REQ_LIST } from '@/api';
import { AuthorizationData } from '@/api-datas';
import { ICast } from '@/models/ICast';
import { IFilm } from '@/models/IFilm';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const queryParams = {
  language: 'ru',
};

interface IServerResponseFilm {
  page: number;
  results: IFilm[];
}
interface IServerResponseCast {
  cast: ICast[];
}

export const filmsApi = createApi({
  reducerPath: 'filmsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers) => {
      headers.set('Authorization', AuthorizationData);
    },
  }),

  endpoints: (builder) => ({
    getFilmById: builder.query<IFilm, string>({
      query: (filmId) => ({
        url: `movie/${filmId}`,
        params: queryParams,
      }),
    }),

    getFilmList: builder.query<IFilm[], string>({
      query: (queryStr) => ({
        url: queryStr,
        params: queryParams,
      }),
      transformResponse: (response: IServerResponseFilm) => response.results,
    }),

    getFilmListById: builder.query<IFilm[], number>({
      query: (genreId) => ({
        url: REQ_LIST.genreId,
        params: {
          language: 'ru',
          include_adult: false,
          include_video: true,
          sort_by: 'popularity.desc',
          with_genres: genreId,
        },
      }),
      transformResponse: (response: IServerResponseFilm) => response.results,
    }),

    getSimilarFilmsById: builder.query<IFilm[], number>({
      query: (filmId) => ({
        url: `movie/${filmId}/similar`,
        params: queryParams,
      }),
      transformResponse: (response: IServerResponseFilm) => response.results,
    }),

    getCastFilmsById: builder.query<ICast[], number>({
      query: (filmId) => ({
        url: `movie/${filmId}/credits`,
        params: queryParams,
      }),
      transformResponse: (response: IServerResponseCast) => response.cast,
    }),
  }),
});
