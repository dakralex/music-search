import React, {useState} from 'react';
import AppScreen from './AppScreen';
import {useSelector} from 'react-redux';
import {RootState} from '../../AppStore';
import {TabNavigationList} from '../navigation/TabNavigation';
import SearchList from '../../components/organisms/SearchList';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import ArtistSearchBar from '../../components/molecules/ArtistSearchBar';

type HomeScreenProps = BottomTabNavigationProp<TabNavigationList, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps): JSX.Element => {
  const recentSearchValues = useSelector(
    (state: RootState) => state.search.recentSearchValues,
  );

  const [search, setSearch] = useState<string>('');

  const submitSearch = () => {
    navigation.navigate('Search', {initialSearchValue: search});
  };

  return (
    <AppScreen>
      <ArtistSearchBar
        searchValue={search}
        setSearchValue={setSearch}
        submitSearch={submitSearch}
      />
      <SearchList items={recentSearchValues} />
    </AppScreen>
  );
};

export default HomeScreen;
