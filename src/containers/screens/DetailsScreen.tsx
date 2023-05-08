import React from 'react';
import AppScreen from './AppScreen';
import {Divider} from '@rneui/themed';
import {StyleSheet, View} from 'react-native';
import {globalStyles} from '../../styles/Globals';
import AlbumList from '../../components/organisms/AlbumList';
import {MainNavigationList} from '../navigation/MainNavigation';
import ArtistListItem from '../../components/molecules/ArtistListItem';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useGetArtistReleaseGroupsQuery} from '../../features/services/musicbrainz';

type DetailsScreenProps = NativeStackNavigationProp<
  MainNavigationList,
  'Details'
>;

const DetailsScreen = ({route}: DetailsScreenProps): JSX.Element => {
  const {artist} = route.params;
  const {
    data: albums,
    isLoading: albumsLoading,
    isFetching: albumsFetching,
  } = useGetArtistReleaseGroupsQuery(artist.id);

  return (
    <AppScreen>
      <View style={styles.detailsScreenContainer}>
        <ArtistListItem artist={artist} shouldBeNavigable={false} />
        <Divider style={globalStyles.divider} />
        <AlbumList
          albums={albums}
          isLoading={albumsLoading || albumsFetching}
        />
      </View>
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  detailsScreenContainer: {
    flex: 1,
  },
});

export default DetailsScreen;
