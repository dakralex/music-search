import {configureStore} from '@reduxjs/toolkit';
import searchReducer, {searchSlice} from './features/search/searchSlice';
import favoritesReducer, {
  favoritesSlice,
} from './features/favorites/favoritesSlice';
import musicbrainzApiReducer, {
  musicbrainzApi,
} from './features/services/musicbrainz';

export const store = configureStore({
  reducer: {
    [searchSlice.name]: searchReducer,
    [favoritesSlice.name]: favoritesReducer,
    [musicbrainzApi.reducerPath]: musicbrainzApiReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(musicbrainzApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
