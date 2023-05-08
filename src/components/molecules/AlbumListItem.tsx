import React from 'react';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';
import {StyleSheet, View} from 'react-native';

export type IAlbumListItem = {
  id: string;
  name: string;
  releaseDate: string;
};

export type AlbumListItemProps = {
  album: IAlbumListItem;
};
const AlbumListItem = ({album}: AlbumListItemProps) => {
  return (
    <View style={styles.albumListItemContainer}>
      <Subtitle>{album.name}</Subtitle>
      <Paragraph>{album.releaseDate}</Paragraph>
    </View>
  );
};

const styles = StyleSheet.create({
  albumListItemContainer: {
    marginVertical: 8,
  },
});

export default AlbumListItem;
