import { ITv } from '@/6_shared/model';
import { rtkApi } from '@/6_shared/api';
import { ETvListTypes } from '../model';

const queryParams = {
  language: 'ru',
};

interface IResponseTv {
  page: number;
  results: ITv[];
}
// interface IResponseCast {
//   cast: ICast[];
// }

export const tvApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getTvById: builder.query<ITv, string>({
      query: (filmId) => ({
        url: `tv/${filmId}`,
        params: queryParams,
      }),
    }),

    getTvList: builder.query<ITv[], ETvListTypes>({
      query: (TvListType) => ({
        url: `tv/${TvListType}`,
        params: queryParams,
      }),
      transformResponse: (response: IResponseTv) => response.results,
    }),

    // getFilmListById: builder.query<IFilm[], number>({
    //   query: (genreId) => ({
    //     url: REQ_LIST.genreId,
    //     params: {
    //       language: 'ru',
    //       include_adult: false,
    //       include_video: true,
    //       sort_by: 'popularity.desc',
    //       with_genres: genreId,
    //     },
    //   }),
    //   transformResponse: (response: IResponseFilm) => response.results,
    // }),

    // getSimilarFilmsById: builder.query<IFilm[], number>({
    //   query: (filmId) => ({
    //     url: `movie/${filmId}/similar`,
    //     params: queryParams,
    //   }),
    //   transformResponse: (response: IResponseFilm) => response.results,
    // }),

    // getCastFilmsById: builder.query<ICast[], number>({
    //   query: (filmId) => ({
    //     url: `movie/${filmId}/credits`,
    //     params: queryParams,
    //   }),
    //   transformResponse: (response: IResponseCast) => response.cast,
    // }),
    // getImagesById: builder.query<IFilmImgList, number>({
    //   query: (filmId) => ({
    //     url: `movie/${filmId}/images`,
    //   }),
    // }),
  }),
});
