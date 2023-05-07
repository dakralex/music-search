import React from 'react';
import {FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArtistListItem, {IArtistListItem} from '../molecules/ArtistListItem';
import {MainNavigationList} from '../../containers/navigation/MainNavigation';

export interface KeyedArtistListItem extends IArtistListItem {
  id: string;
}

export type ArtistListProps = {
  artists: Array<KeyedArtistListItem>;
};

const ArtistList = ({artists}: ArtistListProps): JSX.Element => {
  const navigation = useNavigation<MainNavigationList>();

  return (
    <FlatList
      data={artists}
      renderItem={({item}) => (
        <ArtistListItem
          {...item}
          onPress={() => {
            navigation.navigate('Details', {artistMbid: item.id});
          }}
        />
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ArtistList;
