import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ArtistListItem, {IArtistListItem} from './ArtistListItem';
import {MainNavigationList} from '../../containers/navigation/MainNavigation';

type ArtistListItemLinkProps = {
  artist: IArtistListItem;
};
const ArtistListItemLink = ({artist}: ArtistListItemLinkProps) => {
  const navigation = useNavigation<MainNavigationList>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {artist: artist});
      }}>
      <ArtistListItem artist={artist} />
    </TouchableOpacity>
  );
};

export default ArtistListItemLink;
