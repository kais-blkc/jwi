import {
  createApi,
  fetchBaseQuery,
  retry,
} from '@reduxjs/toolkit/dist/query/react';
import { AuthorizationData } from '@/api-datas';
import { BASE_URL } from '../config';
import { ICast, IFilmImgList, ITv, IFilm } from '../model';
import { EQueryTypes } from '@/3_widgets/TvDetail/model/movieTypes';

export const fetchParams = {
  headers: {
    Authorization: AuthorizationData,
  },
};

const queryParams = {
  language: 'ru',
};

interface IResponseCast {
  cast: ICast[];
}

interface IResponseFilm {
  page: number;
  results: IFilm[];
}

export interface IApiParams {
  movieType: EQueryTypes;
  filmId: number;
}

// Create our baseQuery instance
const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('Authorization', AuthorizationData);
  },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 });

export const rtkApi = createApi({
  reducerPath: 'rtkApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Films', 'Tv', 'Person', 'People'],

  endpoints: (builder) => ({
    getImgsById: builder.query<IFilmImgList, IApiParams>({
      query: ({ movieType, filmId }) => ({
        url: `${movieType}/${filmId}/images`,
      }),
    }),
    getCastById: builder.query<ICast[], IApiParams>({
      query: ({ movieType, filmId }) => ({
        url: `${movieType}/${filmId}/credits`,
        params: queryParams,
      }),
      transformResponse: (response: IResponseCast) => response.cast,
    }),
    getSimilarById: builder.query<IFilm[] | ITv[], IApiParams>({
      query: ({ movieType, filmId }) => ({
        url: `${movieType}/${filmId}/similar`,
        params: queryParams,
      }),
      transformResponse: (response: IResponseFilm) => response.results,
    }),
  }),
  // endpoints: (builder) => ({
  //   getImgsById: builder.query<IFilmImgList, string>({
  //     query: (queryStr) => ({
  //       url: `${queryStr}/images`,
  //     }),
  //   }),
  //   getCastById: builder.query<ICast[], string>({
  //     query: (queryStr) => ({
  //       url: `${queryStr}/credits`,
  //       params: queryParams,
  //     }),
  //     transformResponse: (response: IResponseCast) => response.cast,
  //   }),
  //   getSimilarById: builder.query<IFilm[] | ITv[], string>({
  //     query: (queryStr) => ({
  //       url: `${queryStr}/similar`,
  //       params: queryParams,
  //     }),
  //     transformResponse: (response: IResponseFilm) => response.results,
  //   }),
  // }),
});
