import { REQ_LIST, fetchParams, getQueryStr } from '@/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IResponse {
  ok: boolean;
  status: number;
  statusText: string;
}

export const getFilmsCats = createAsyncThunk('films/getFilmsCats', async () => {
  const response = await fetch(getQueryStr(REQ_LIST.genreList), fetchParams);
  catchFetchError(response, 'getFilmsCats');
});

export const getNowPlayingFilms = createAsyncThunk(
  'films/getNowPlayingFilms',
  async () => {
    const response = await fetch(getQueryStr(REQ_LIST.nowPlaying), fetchParams);
    catchFetchError(response, 'getNowPlayingFilms');

    const films = await response.json();
    return films;
  }
);

export const getPopularFilms = createAsyncThunk(
  'films/getPopularFilms',
  async () => {
    const response = await fetch(getQueryStr(REQ_LIST.popular), fetchParams);
    catchFetchError(response, 'getPopularFilms');

    const films = await response.json();
    return films;
  }
);

export const getFilmById = createAsyncThunk(
  'films/getFilmById',
  async (filmId: string) => {
    const response = await fetch(getQueryStr('movie/' + filmId), fetchParams);
    catchFetchError(response, 'getFilmById');

    const films = await response.json();
    return films;
  }
);

export const getGenreList = createAsyncThunk('films/getGenreList', async () => {
  const response = await fetch(getQueryStr('genre/movie/list'), fetchParams);
  catchFetchError(response, 'getGenreList');

  const genres = await response.json();
  // console.log(genres);
  return genres;
});

export const getVideosById = createAsyncThunk(
  'films/getVideosById',
  async (filmId: number) => {
    const response = await fetch(
      getQueryStr(`movie/${filmId}/videos`),
      fetchParams
    );
    catchFetchError(response, 'getVideosById');

    const videos = await response.json();
    return videos;
  }
);

export const getImagesById = createAsyncThunk(
  'films/getImagesById',
  async (filmId: number) => {
    const response = await fetch(
      getQueryStr(`movie/${filmId}/images`, ''),
      fetchParams
    );
    catchFetchError(response, 'getImagesById');

    const videos = await response.json();
    return videos;
  }
);

export const getSimilarFilmsById = createAsyncThunk(
  'films/getSimilarFilmsById',
  async (filmId: number) => {
    const response = await fetch(
      getQueryStr(`movie/${filmId}/similar`),
      fetchParams
    );
    catchFetchError(response, 'getSimilarFilmsById');

    const result = await response.json();
    return result;
  }
);

export const getCastFilmsById = createAsyncThunk(
  'films/getCastFilmsById',
  async (filmId: number) => {
    const response = await fetch(
      getQueryStr(`movie/${filmId}/credits`),
      fetchParams
    );
    catchFetchError(response, 'getCastFilmsById');

    const result = await response.json();
    return result;
  }
);

// export const getCartoons = createAsyncThunk('films/getCartoons', async () => {
//   const response = await fetch(getQueryStr(REQ_LIST.cartoons), fetchParams);
//   catchFetchError(response, 'getCartoons');

//   const result = await response.json();
//   return result;
// });

function catchFetchError(response: IResponse, thunkName: string) {
  if (!response.ok) {
    throw new Error(
      `Error: \n status: ${response.status}; \n Status text: ${response.statusText}; \n Thunk Name: ${thunkName};`
    );
  }
}
