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
      state.recentSearchValues.push(action.payload);
    },
  },
});

export const {recordSearchValue} = searchSlice.actions;
export default searchSlice.reducer;
