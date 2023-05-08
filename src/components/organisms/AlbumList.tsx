import React from 'react';
import {FlatList} from 'react-native';
import Subtitle from '../atoms/Subtitle';
import LoadingSpinner from '../atoms/LoadingSpinner';
import AlbumListItem, {IAlbumListItem} from '../molecules/AlbumListItem';

export type IAlbumList = Array<IAlbumListItem>;

type AlbumListProps = {
  albums: IAlbumList;
  isLoading: boolean;
};

const AlbumList = ({albums, isLoading}: AlbumListProps) => {
  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <FlatList
      ListHeaderComponent={<Subtitle fontWeight="bold">Albums</Subtitle>}
      data={albums}
      renderItem={({item: album}) => <AlbumListItem album={album} />}
    />
  );
};

export default AlbumList;
