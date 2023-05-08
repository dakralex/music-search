import React from 'react';
import AppScreen from './AppScreen';
import {TabNavigationList} from '../navigation/TabNavigation';
import {transformArtistToApp} from '../../utilities/musicbrainz';
import ArtistSearch from '../../components/templates/ArtistSearch';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {useLazySearchArtistByNameQuery} from '../../features/services/musicbrainz';
import ArtistSearchResultList from '../../components/templates/ArtistSearchResultList';

type SearchScreenProps = BottomTabNavigationProp<TabNavigationList, 'Search'>;

const SearchScreen = ({route}: SearchScreenProps): JSX.Element => {
  const {initialSearchValue} = route.params;
  const [loadSearch, {data, isLoading: artistsLoading}] =
    useLazySearchArtistByNameQuery();

  return (
    <AppScreen>
      <ArtistSearch
        initialSearchValue={initialSearchValue}
        loadSearch={loadSearch}
      />
      <ArtistSearchResultList
        isLoading={artistsLoading}
        artists={transformArtistToApp(data)}
      />
    </AppScreen>
  );
};

export default SearchScreen;
