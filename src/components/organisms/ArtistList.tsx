import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {FlatList, TouchableOpacity} from 'react-native';
import ArtistListItem, {IArtistListItem} from '../molecules/ArtistListItem';
import {MainNavigationList} from '../../containers/navigation/MainNavigation';

export type IArtistList = Array<IArtistListItem>;

type ArtistListProps = {
  artists: IArtistList;
};

const ArtistList = ({artists}: ArtistListProps): JSX.Element => {
  const navigation = useNavigation<MainNavigationList>();

  return (
    <FlatList
      data={artists}
      renderItem={({item: artist}) => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {artist: artist});
          }}>
          <ArtistListItem artist={artist} />
        </TouchableOpacity>
      )}
      keyExtractor={item => item.id}
    />
  );
};

export default ArtistList;
