import { IFilm } from '@/6_shared/model';
import { rtkApi } from '@/6_shared/api';

const queryParams = {
  language: 'ru',
};

interface IResponseFilm {
  page: number;
  results: IFilm[];
}

export const filmsApi = rtkApi.injectEndpoints({
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
      transformResponse: (response: IResponseFilm) => response.results,
    }),

    getFilmsDiscover: builder.query<IFilm[], number>({
      query: (genreId) => ({
        url: 'discover/movie',
        params: {
          language: 'ru',
          include_adult: false,
          include_video: true,
          sort_by: 'popularity.desc',
          with_genres: genreId,
        },
      }),
      transformResponse: (response: IResponseFilm) => response.results,
    }),
  }),
});
