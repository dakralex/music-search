import React from 'react';
import {View} from 'react-native';
import AppScreen from './AppScreen';
import {Divider} from '@rneui/themed';
import {TabNavigationList} from '../navigation/TabNavigation';
import WelcomeHeader from '../../components/templates/WelcomeHeader';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import RecentSearchList from '../../components/templates/RecentSearchList';
import ArtistSearchLink from '../../components/templates/ArtistSearchLink';

type HomeScreenProps = BottomTabNavigationProp<TabNavigationList, 'Home'>;

const HomeScreen = ({}: HomeScreenProps): JSX.Element => {
  return (
    <AppScreen>
      <View>
        <WelcomeHeader />
        <Divider style={{marginVertical: 16}} />
        <ArtistSearchLink />
        <RecentSearchList />
      </View>
    </AppScreen>
  );
};

export default HomeScreen;
