import React from 'react';
import AppScreen from './AppScreen';
import {FlatList} from 'react-native';
import Paragraph from '../../components/atoms/Paragraph';
import {MainNavigationList} from '../navigation/MainNavigation';
import LoadingSpinner from '../../components/atoms/LoadingSpinner';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useGetArtistReleasesQuery} from '../../features/services/musicbrainz';

type DetailsScreenProps = NativeStackNavigationProp<
  MainNavigationList,
  'Details'
>;

const DetailsScreen = ({route}: DetailsScreenProps): JSX.Element => {
  const {artistMbid} = route.params;
  const {data, isLoading} = useGetArtistReleasesQuery(artistMbid);
  console.log(data);
  return (
    <AppScreen>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <FlatList
          data={data.releases}
          renderItem={({item}) => <Paragraph>{item.title}</Paragraph>}
        />
      )}
    </AppScreen>
  );
};

export default DetailsScreen;
