import React from 'react';
import {Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {SearchBar} from '@rneui/themed';
import {AppDispatch} from '../../AppStore';
import {usePalette} from '../../hooks/Colors';
import {getSearchStyles} from '../../styles/Search';
import {recordSearchValue} from '../../features/search/searchSlice';

type ArtistSearchBarProps = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  updateSearch?: (searchValue: string) => void;
  submitSearch?: () => void;
};

const ArtistSearchBar = ({
  searchValue,
  setSearchValue,
  updateSearch: updateSearchFunc,
  submitSearch: submitSearchFunc,
}: ArtistSearchBarProps) => {
  const colorPalette = usePalette();
  const styles = getSearchStyles(colorPalette);

  const dispatch: AppDispatch = useDispatch();

  const updateSearch = (searchValue: string) => {
    setSearchValue(searchValue);

    if (updateSearchFunc) {
      updateSearchFunc(searchValue);
    }
  };

  const submitSearch = () => {
    dispatch(recordSearchValue(searchValue));

    if (submitSearchFunc) {
      submitSearchFunc();
    }
  };

  return (
    <SearchBar
      containerStyle={styles.searchBarContainer}
      onChangeText={updateSearch}
      onSubmitEditing={submitSearch}
      placeholder={'ex. The Beatles'}
      value={searchValue}
      platform={
        Platform.OS === 'ios' || Platform.OS === 'android'
          ? Platform.OS
          : 'default'
      }
    />
  );
};

export default ArtistSearchBar;
