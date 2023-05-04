import React from 'react';
import {FlatList} from 'react-native';
import ArtistListItem, {ArtistListItemProps} from '../molecules/ArtistListItem';

export interface KeyedArtistList extends ArtistListItemProps {
  id: string;
}

export type ArtistListProps = {
  artists: Array<KeyedArtistList>;
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
