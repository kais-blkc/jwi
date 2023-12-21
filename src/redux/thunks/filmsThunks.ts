import { MOVE_LIST, fetchParams, getQueryStr } from '@/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

interface IResponse {
  ok: boolean;
  status: number;
  statusText: string;
}

export const getFilmsCats = createAsyncThunk('films/getFilmsCats', async () => {
  const response = await fetch(getQueryStr(MOVE_LIST.genreList), fetchParams);
  catchFetchError(response);
});

export const getNowPlayingFilms = createAsyncThunk(
  'films/getNowPlayingFilms',
  async () => {
    const response = await fetch(
      getQueryStr(MOVE_LIST.nowPlaying),
      fetchParams
    );
    catchFetchError(response);

    const films = await response.json();
    return films;
  }
);

export const getPopularFilms = createAsyncThunk(
  'films/getPopularFilms',
  async () => {
    const response = await fetch(getQueryStr(MOVE_LIST.popular), fetchParams);
    catchFetchError(response);

    const films = await response.json();
    return films;
  }
);

export const getFilmById = createAsyncThunk(
  'films/getFilmById',
  async (filmId: string) => {
    const response = await fetch(getQueryStr('movie/' + filmId), fetchParams);
    catchFetchError(response);

    const films = await response.json();
    return films;
  }
);

export const getGenreList = createAsyncThunk('films/getGenreList', async () => {
  const response = await fetch(getQueryStr('genre/movie/list'), fetchParams);
  catchFetchError(response);

  const genres = await response.json();
  return genres;
});

export const getVideosById = createAsyncThunk(
  'films/getVideosById',
  async (filmId: number) => {
    const response = await fetch(
      getQueryStr(`movie/${filmId}/videos`),
      fetchParams
    );
    catchFetchError(response);

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
    catchFetchError(response);

    const videos = await response.json();
    return videos;
  }
);

function catchFetchError(response: IResponse) {
  if (!response.ok) {
    throw new Error(
      `Error: \n status: ${response.status} \n Status text: ${response.statusText}`
    );
  }
}
