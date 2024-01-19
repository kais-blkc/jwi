import { IFilm } from '@/6_shared/model';
import { rtkApi } from '@/6_shared/api';

const queryParams = {
  language: 'ru',
  adult: false,
};

interface IResponseFilm {
  page: number;
  results: IFilm[];
  total_pages: number;
}

interface IGetFilmListParams {
  queryStr: string;
  page?: number;
}

interface IGetFilmsDiscoverParams {
  genreId: number;
  page?: number;
}

export const filmsApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getFilmById: builder.query<IFilm, string>({
      query: (filmId) => ({
        url: `movie/${filmId}`,
        params: queryParams,
      }),
    }),

    getFilmList: builder.query<IResponseFilm, IGetFilmListParams>({
      query: ({ queryStr, page = 1 }) => ({
        url: queryStr,
        params: {
          ...queryParams,
          page,
        },
      }),
    }),

    getFilmsDiscover: builder.query<IResponseFilm, IGetFilmsDiscoverParams>({
      query: ({ genreId, page = 1 }) => ({
        url: 'discover/movie',
        params: {
          language: 'ru',
          include_adult: false,
          include_video: true,
          sort_by: 'popularity.desc',
          with_genres: genreId,
          page,
        },
      }),
      // transformResponse: (response: IResponseFilm) => response.results,
    }),
  }),
});
