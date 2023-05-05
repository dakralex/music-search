import React, {useEffect, useState} from 'react';
import AppScreen from './AppScreen';
import useDebounce from '../../hooks/useDebounce';
import {TabNavigationList} from '../navigation/MainNavigation';
import {transformArtistToApp} from '../../utilities/musicbrainz';
import LoadingSpinner from '../../components/atoms/LoadingSpinner';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import ArtistSearchBar from '../../components/molecules/ArtistSearchBar';
import {useLazySearchArtistByNameQuery} from '../../features/services/musicbrainz';
import ArtistList, {
  KeyedArtistListItem,
} from '../../components/organisms/ArtistList';

type SearchScreenProps = BottomTabNavigationProp<TabNavigationList, 'Search'>;

const SearchScreen = ({route}: SearchScreenProps): JSX.Element => {
  const {initialSearchValue} = route.params;
  const [search, setSearch] = useState<string>(initialSearchValue);

  // TODO: Refactor so musicbrainzApi sequences API calls to one request per second
  const searchValue = useDebounce(search, 1000);
  const [loadSearch, {data, isLoading: artistsLoading}] =
    useLazySearchArtistByNameQuery();
  const artists: KeyedArtistListItem[] = transformArtistToApp(data);

  useEffect(() => {
    setSearch(initialSearchValue);
  }, [initialSearchValue]);

  useEffect(() => {
    if (searchValue === '' || searchValue.length < 3) {
      return;
    }

    loadSearch(searchValue);
  }, [loadSearch, searchValue]);

  const submitSearch = () => {
    loadSearch(searchValue);
  };

  return (
    <AppScreen>
      <ArtistSearchBar
        searchValue={search}
        setSearchValue={setSearch}
        submitSearch={submitSearch}
      />
      {artistsLoading ? <LoadingSpinner /> : <ArtistList artists={artists} />}
    </AppScreen>
  );
};

export default SearchScreen;
