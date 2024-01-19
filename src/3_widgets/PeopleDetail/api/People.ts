import { rtkApi } from '@/6_shared/api';
import { IFilm, IPerson } from '@/6_shared/model';

const personQueryParams = {
  language: 'ru',
};

interface IGetPersonFilmsByIdRes {
  cast: IFilm[];
  crew: IFilm[];
  id: number;
}

export const peopleApi = rtkApi.injectEndpoints({
  endpoints: (builder) => ({
    getPersonById: builder.query<IPerson, number>({
      query: (personId) => ({
        url: `/person/${personId}`,
        params: personQueryParams,
      }),
    }),
    getPersonFilmsById: builder.query<IFilm[], number>({
      query: (personId) => ({
        url: `/person/${personId}/movie_credits`,
        params: personQueryParams,
      }),
      transformResponse: (response: IGetPersonFilmsByIdRes) => response.cast,
    }),
  }),
});
