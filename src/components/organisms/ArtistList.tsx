import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {IArtistListItem} from '../molecules/ArtistListItem';
import ArtistListItemLink from '../molecules/ArtistListItemLink';

export type IArtistList = Array<IArtistListItem>;

type ArtistListProps = {
  artists?: IArtistList;
  noItemsComponent?: JSX.Element | JSX.Element[];
};

const ArtistList = ({
  artists,
  noItemsComponent,
}: ArtistListProps): JSX.Element => {
  const artistsCount = Object.keys(artists ?? {}).length;

  return artistsCount > 0 ? (
    <FlatList
      contentContainerStyle={styles.artistListContainer}
      data={artists}
      renderItem={({item: artist}) => (
        <View style={styles.artistListItemWrapper}>
          <ArtistListItemLink artist={artist} />
        </View>
      )}
      keyExtractor={item => item.id}
    />
  ) : (
    <View style={styles.artistListEmptyContainer}>{noItemsComponent}</View>
  );
};

const styles = StyleSheet.create({
  artistListContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  artistListEmptyContainer: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  artistListItemWrapper: {
    paddingVertical: 8,
  },
});

export default ArtistList;
