import React, {useEffect, useState} from 'react';
import AppScreen from './AppScreen';
import {Platform} from 'react-native';
import {SearchBar} from '@rneui/themed';
import {usePalette} from '../../hooks/Colors';
import useDebounce from '../../hooks/useDebounce';
import ArtistList, {
  KeyedArtistListItem,
} from '../../components/organisms/ArtistList';
import {useLazySearchArtistByNameQuery} from '../../features/services/musicbrainz';
import LoadingSpinner from '../../components/atoms/LoadingSpinner';
import {transformArtistToApp} from '../../utilities/musicbrainz';

const SearchScreen = (): JSX.Element => {
  const colorPalette = usePalette();

  const [search, setSearch] = useState<string>('');

  // TODO: Refactor so musicbrainzApi sequences API calls to one request per second
  const searchValue = useDebounce(search, 1000);
  const [loadSearch, result] = useLazySearchArtistByNameQuery();
  const artists: KeyedArtistListItem[] = transformArtistToApp(result.data);
  const artistLoading = result.isLoading;

  useEffect(() => {
    if (searchValue === '' || searchValue.length < 3) {
      return;
    }

    loadSearch(searchValue);
  }, [loadSearch, searchValue]);

  const updateSearch = (value: string) => {
    setSearch(value);
  };

  const submitSearch = () => {
    loadSearch(searchValue);
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
      {artistLoading ? <LoadingSpinner /> : <ArtistList artists={artists} />}
    </AppScreen>
  );
};

export default SearchScreen;
