import React from 'react';
import {FlatList} from 'react-native';
import ArtistListItem, {ArtistListItemProps} from '../molecules/ArtistListItem';

export interface KeyedArtistListItem extends ArtistListItemProps {
  id: string;
}

export type ArtistListProps = {
  artists: Array<KeyedArtistListItem>;
};

const ArtistList = ({artists}: ArtistListProps): JSX.Element => {
  return (
    <FlatList
      data={artists}
      renderItem={({item}) => <ArtistListItem {...item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default ArtistList;
