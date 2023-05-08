import React from 'react';
import {FlatList} from 'react-native';
import {IArtistListItem} from '../molecules/ArtistListItem';
import ArtistListItemLink from '../molecules/ArtistListItemLink';

export type IArtistList = Array<IArtistListItem>;

type ArtistListProps = {
  artists?: IArtistList;
};

const ArtistList = ({artists}: ArtistListProps): JSX.Element => {
  return (
    <FlatList
      data={artists}
      renderItem={({item: artist}) => <ArtistListItemLink artist={artist} />}
      keyExtractor={item => item.id}
    />
  );
};

export default ArtistList;
