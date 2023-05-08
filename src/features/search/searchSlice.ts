import {createSlice, PayloadAction} from '@reduxjs/toolkit';

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

      state.recentSearchValues = state.recentSearchValues.filter(
        (searchValue: string) =>
          getGeneralTerm(searchValue) !== generalSearchTerm,
      );

      state.recentSearchValues.push(action.payload);

      state.recentSearchValues.splice(5);
    },
  },
});

export const {recordSearchValue} = searchSlice.actions;
export default searchSlice.reducer;
