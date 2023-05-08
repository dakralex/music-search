import React from 'react';
import Subtitle from '../atoms/Subtitle';
import Paragraph from '../atoms/Paragraph';
import LoadingSpinner from '../atoms/LoadingSpinner';
import {Image, StyleSheet, View} from 'react-native';
import {useCoverArtUrl} from '../../hooks/useCoverArtUrl';

export type IAlbumListItem = {
  id: string;
  name: string;
  releaseDate: string;
};

export type AlbumListItemProps = {
  album: IAlbumListItem;
};
const AlbumListItem = ({album}: AlbumListItemProps) => {
  const {coverUrl, isLoading} = useCoverArtUrl(album.id);

  return (
    <View style={styles.albumListItemContainer}>
      <View style={styles.albumListItemCoverContainer}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <Image
            source={
              coverUrl ? {uri: coverUrl} : require('../../assets/unknown.png')
            }
            style={styles.albumListItemCoverContainer}
          />
        )}
      </View>
      <View style={styles.albumListItemInfoContainer}>
        <Subtitle>{album.name}</Subtitle>
        {album.releaseDate ? <Paragraph>{album.releaseDate}</Paragraph> : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  albumListItemContainer: {
    marginVertical: 8,
    flexDirection: 'row',
  },
  albumListItemCoverContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: 120,
    height: 120,
  },
  albumListItemInfoContainer: {
    flex: 2,
    paddingLeft: 24,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

export default AlbumListItem;
