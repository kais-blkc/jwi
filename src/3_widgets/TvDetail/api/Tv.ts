import { ITv } from '@/6_shared/model';
import { rtkApi } from '@/6_shared/api';
import { ETvListTypes } from '../model';

const queryParams = {
  language: 'ru',
};

interface IResponseTv {
  page: number;
  results: ITv[];
  total_pages: number;
}

interface IGetTvListParams {
  TvListType: ETvListTypes;
  page?: number;
}

export const tvApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getTvById: builder.query<ITv, string>({
      query: (filmId) => ({
        url: `tv/${filmId}`,
        params: queryParams,
      }),
    }),

    getTvList: builder.query<IResponseTv, IGetTvListParams>({
      query: ({ TvListType, page = 1 }) => ({
        url: `tv/${TvListType}`,
        params: {
          ...queryParams,
          page,
        },
      }),
      // transformResponse: (response: IResponseTv) => response.results,
    }),
    // getTvList: builder.query<ITv[], ETvListTypes>({
    //   query: (TvListType) => ({
    //     url: `tv/${TvListType}`,
    //     params: queryParams,
    //   }),
    //   transformResponse: (response: IResponseTv) => response.results,
    // }),
  }),
});
