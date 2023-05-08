import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import searchReducer, {searchSlice} from './features/search/searchSlice';
import favoritesReducer, {
  favoritesSlice,
} from './features/favorites/favoritesSlice';
import musicbrainzApiReducer, {
  musicbrainzApi,
} from './features/services/musicbrainz';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

// Combine all the applications' reducers
const rootReducer = combineReducers({
  [searchSlice.name]: searchReducer,
  [favoritesSlice.name]: favoritesReducer,
  [musicbrainzApi.reducerPath]: musicbrainzApiReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(musicbrainzApi.middleware),
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
