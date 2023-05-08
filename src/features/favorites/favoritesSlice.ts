import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {IArtistListItem} from '../../components/molecules/ArtistListItem';

export interface FavoritesState {
  favoriteArtists: {
    [id: string]: IArtistListItem;
  };
}

const initialState: FavoritesState = {
  favoriteArtists: {},
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavoriteArtist: (
      state: FavoritesState,
      action: PayloadAction<IArtistListItem>,
    ) => {
      if (!state.favoriteArtists[action.payload.id]) {
        state.favoriteArtists[action.payload.id] = action.payload;
      }
    },
    removeFavoriteArtist: (
      state: FavoritesState,
      action: PayloadAction<string | IArtistListItem>,
    ) => {
      if (typeof action.payload === 'string') {
        delete state.favoriteArtists[action.payload];
      } else {
        delete state.favoriteArtists[action.payload.id];
      }
    },
  },
});

export const {addFavoriteArtist, removeFavoriteArtist} = favoritesSlice.actions;
export default favoritesSlice.reducer;
