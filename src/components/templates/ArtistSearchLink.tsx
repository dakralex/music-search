import React, {useState} from 'react';
import {View} from 'react-native';
import Subtitle from '../atoms/Subtitle';
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
    <View>
      <Subtitle>Search for an artist</Subtitle>
      <ArtistSearchBar
        searchValue={search}
        setSearchValue={setSearch}
        submitSearch={submitSearch}
      />
    </View>
  );
};

export default ArtistSearchLink;
