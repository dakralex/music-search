import React from 'react';
import AppScreen from './AppScreen';
import {TabNavigationList} from '../navigation/TabNavigation';
import ArtistSearch from '../../components/templates/ArtistSearch';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useLazySearchArtistByNameQuery} from '../../features/services/musicbrainz';
import ArtistSearchResultList from '../../components/templates/ArtistSearchResultList';

type SearchScreenProps = BottomTabNavigationProp<TabNavigationList, 'Search'>;

const SearchScreen = ({route}: SearchScreenProps): JSX.Element => {
  const {initialSearchValue} = route.params;
  const [loadSearch, {data: artists, isLoading: artistsLoading}] =
    useLazySearchArtistByNameQuery();

  return (
    <AppScreen>
      <ArtistSearch
        initialSearchValue={initialSearchValue}
        loadSearch={loadSearch}
      />
      <ArtistSearchResultList artists={artists} isLoading={artistsLoading} />
    </AppScreen>
  );
};

export default SearchScreen;
