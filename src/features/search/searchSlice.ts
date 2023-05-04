import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {KeyedArtistList} from '../../components/organisms/ArtistList';

export interface SearchState {
  recentInputs: Array<string>;
  currentArtistResults: Array<KeyedArtistList>;
}

const initialState: SearchState = {
  recentInputs: [],
  currentArtistResults: [
    {
      id: '11ae9fbb-f3d7-4a47-936f-4c0a04d3b3b5',
      name: 'The White Stripes',
      yearsActive: {begin: '1997-07-14', end: '2011-02-02'},
      areaFormed: 'Detroit, United States',
    },
    {
      id: 'db4624cf-0e44-481e-a9dc-2142b833ec2f',
      name: 'Robbie Williams',
      yearsActive: {begin: '1974-02-13', end: null},
      areaFormed: 'Stoke-on-Trent, United Kingdom',
    },
    {
      id: 'aa7a2827-f74b-473c-bd79-03d065835cf7',
      name: 'Franz Ferdinand',
      yearsActive: {begin: '2001', end: null},
      areaFormed: 'Glasgow, United Kingdom',
    },
    {
      id: 'f2fb0ff0-5679-42ec-a55c-15109ce6e320',
      name: 'Die Ärzte',
      yearsActive: {begin: '1982', end: null},
      areaFormed: 'Berlin, Germany',
    },
  ],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    recordSearchInput: (state, action: PayloadAction<string>) => {
      state.recentInputs.push(action.payload);
    },
    recordArtistResults: (
      state,
      action: PayloadAction<Array<KeyedArtistList>>,
    ) => {
      state.currentArtistResults = action.payload;
    },
    clearArtistResults: state => {
      state.currentArtistResults = [];
    },
  },
});

export const {recordSearchInput, recordArtistResults, clearArtistResults} =
  searchSlice.actions;
export default searchSlice.reducer;
