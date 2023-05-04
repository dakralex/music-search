import React, {useState} from 'react';
import AppScreen from './AppScreen';
import {Platform} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {usePalette} from '../../hooks/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../AppStore';
import Paragraph from '../../components/atoms/Paragraph';
import SearchList from '../../components/organisms/SearchList';
import ArtistList from '../../components/organisms/ArtistList';
import {recordSearchValue} from '../../features/search/searchSlice';

const SearchScreen = (): JSX.Element => {
  const colorPalette = usePalette();

  const dispatch: AppDispatch = useDispatch();
  const [search, setSearch] = useState<string>('');
  const recentSearchValues = useSelector(
    (state: RootState) => state.search.recentSearchValues,
  );
  const artists = useSelector(
    (state: RootState) => state.search.currentArtistResults,
  );

  const updateSearch = (value: string) => {
    setSearch(value);
  };

  const submitSearch = () => {
    dispatch(recordSearchValue(search));
  };

  return (
    <AppScreen>
      <SearchBar
        containerStyle={{
          backgroundColor: colorPalette.foreground,
          marginVertical: 16,
          borderRadius: 6,
        }}
        onChangeText={updateSearch}
        onSubmitEditing={submitSearch}
        placeholder={'ex. The Beatles'}
        value={search}
        platform={
          Platform.OS === 'ios' || Platform.OS === 'android'
            ? Platform.OS
            : 'default'
        }
      />
      <Paragraph>Search results for {search}</Paragraph>
      <SearchList items={recentSearchValues} />
      <ArtistList artists={artists} />
    </AppScreen>
  );
};

export default SearchScreen;
