import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import ArtistSearchBar from '../molecules/ArtistSearchBar';
import {TabNavigationList} from '../../containers/navigation/TabNavigation';

const ArtistSearchLink = () => {
  const navigation = useNavigation<TabNavigationList>();
  const [search, setSearch] = useState<string>('');

  const submitSearch = () => {
    navigation.navigate('Search', {initialSearchValue: search});
  };

  return (
    <ArtistSearchBar
      searchValue={search}
      setSearchValue={setSearch}
      submitSearch={submitSearch}
    />
  );
};

export default ArtistSearchLink;
