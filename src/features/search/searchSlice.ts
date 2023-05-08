import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const MAX_RECENT_SEARCH_ITEMS = 5;

export interface SearchState {
  recentSearchValues: Array<string>;
}

const initialState: SearchState = {
  recentSearchValues: [],
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    recordSearchValue: (state: SearchState, action: PayloadAction<string>) => {
      const getGeneralTerm = (searchValue: string) =>
        searchValue.toLowerCase().replace(/\s/g, '');
      const generalSearchTerm = getGeneralTerm(action.payload);

      // Remove items that are similar to the given search value
      state.recentSearchValues = state.recentSearchValues.filter(
        (searchValue: string) =>
          getGeneralTerm(searchValue) !== generalSearchTerm,
      );

      // Remove first item from recent search values if it exceeds limit
      if (state.recentSearchValues.length > MAX_RECENT_SEARCH_ITEMS - 1) {
        state.recentSearchValues.splice(0, 1);
      }

      // Add new search item to recent search values
      state.recentSearchValues.push(action.payload);
    },
  },
});

export const {recordSearchValue} = searchSlice.actions;
export default searchSlice.reducer;
