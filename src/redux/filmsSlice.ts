import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IFilm } from '@/models/IFilm';
import { IAllGenres } from '@/types';
import {
  getFilmById,
  getGenreList,
  getNowPlayingFilms,
  getPopularFilms,
  getVideosById,
  getImagesById,
  getSimilarFilmsById,
  getCastFilmsById,
} from './thunks/filmsThunks';

export interface IInitialState {
  films: {
    nowPlaying: IFilm[];
    popular: IFilm[];
    cartoons: IFilm[];
  };
  curFilm: IFilm;
  allGenres: IAllGenres | {};
  genresReady: boolean;
  loading: boolean;
}

const initialState: IInitialState = {
  films: {
    popular: [],
    nowPlaying: [],
    cartoons: [],
  },
  curFilm: {
    id: 0,
    title: 'Test title',
    genre_ids: [0],
    genres: [],
  },

  allGenres: {},
  genresReady: false,
  loading: false,
};

const filmsSlice = createSlice({
  name: 'films',
  initialState,
  reducers: {
    setCurFilm(state, film: PayloadAction<IFilm>) {
      state.curFilm = film.payload;
    },
    loadingOn(state) {
      state.loading = true;
    },
    loadingOff(state) {
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    // getNowPlayingFilms
    builder
      .addCase(getNowPlayingFilms.fulfilled, (state, action) => {
        state.films.nowPlaying = action.payload.results;
      })
      .addCase(getNowPlayingFilms.pending, () => {
        thunkPendingHandler('nowPlaying');
      })
      .addCase(getNowPlayingFilms.rejected, (_, action) => {
        thunkErrorHandler(action.error.message);
      });

    // getPopularFilms
    builder
      .addCase(getPopularFilms.fulfilled, (state, action) => {
        state.films.popular = action.payload.results;
      })
      .addCase(getPopularFilms.pending, () => {
        thunkPendingHandler('popular');
      })
      .addCase(getPopularFilms.rejected, (_, action) => {
        thunkErrorHandler(action.error.message);
      });

    // getGenreList
    builder
      .addCase(getGenreList.fulfilled, (state, action) => {
        const genresHashMap = Object.fromEntries(
          action.payload.genres.map((genre: any) => [genre.id, genre.name])
        );

        state.allGenres = genresHashMap;
        state.genresReady = true;
      })
      .addCase(getGenreList.pending, () => {
        thunkPendingHandler('genres');
      })
      .addCase(getGenreList.rejected, (_, action) => {
        thunkErrorHandler(action.error.message);
      });

    // getFilmById
    builder
      .addCase(getFilmById.fulfilled, (state, action) => {
        state.curFilm = action.payload;
        state.loading = false;
      })
      .addCase(getFilmById.pending, (state) => {
        thunkPendingHandler('film by id');
        state.loading = true;
      })
      .addCase(getFilmById.rejected, (_, action) => {
        thunkErrorHandler(action.error.message);
      });

    // getVideosById
    builder
      .addCase(getVideosById.fulfilled, (state, action) => {
        state.curFilm.videos = action.payload.results;
      })
      .addCase(getVideosById.pending, () => {
        thunkPendingHandler('getVideosById');
      })
      .addCase(getVideosById.rejected, (_, action) => {
        thunkErrorHandler(action.error.message);
      });

    // getImagesById
    builder
      .addCase(getImagesById.fulfilled, (state, action) => {
        state.curFilm.images = action.payload;
      })
      .addCase(getImagesById.pending, () => {
        thunkPendingHandler('getImagesById');
      })
      .addCase(getImagesById.rejected, (_, action) => {
        thunkErrorHandler(action.error.message);
      });

    builder
      .addCase(getSimilarFilmsById.fulfilled, (state, action) => {
        state.curFilm.similar = action.payload.results;
      })
      .addCase(getSimilarFilmsById.pending, () => {
        thunkPendingHandler('getSimilarFilmsById');
      })
      .addCase(getSimilarFilmsById.rejected, (_, action) => {
        thunkErrorHandler(action.error.message);
      });

    builder
      .addCase(getCastFilmsById.fulfilled, (state, action) => {
        state.curFilm.cast = action.payload.cast;
      })
      .addCase(getCastFilmsById.pending, () => {
        thunkPendingHandler('getCastFilmsById');
      })
      .addCase(getCastFilmsById.rejected, (_, action) => {
        thunkErrorHandler(action.error.message);
      });
  },
});

const thunkPendingHandler = (text = '') => {
  `${text} - request pending...`;
};

const thunkErrorHandler = (error = '') => {
  console.error(error);
};

export const { setCurFilm } = filmsSlice.actions;
export default filmsSlice.reducer;
