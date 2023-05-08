import React from 'react';
import {View} from 'react-native';
import AppScreen from './AppScreen';
import {Divider} from '@rneui/themed';
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
  const {data: albums, isLoading: albumsLoading} =
    useGetArtistReleaseGroupsQuery(artist.id);

  return (
    <AppScreen>
      <View>
        <ArtistListItem artist={artist} shouldBeNavigable={false} />
        <Divider style={{marginVertical: 16}} />
        <AlbumList albums={albums} isLoading={albumsLoading} />
      </View>
    </AppScreen>
  );
};

export default DetailsScreen;
