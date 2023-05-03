import React from 'react';
import {View} from 'react-native';
import {useBackgroundColor} from '../hooks/Colors';
import ArtistList from '../components/organisms/ArtistList';

const HomeScreen = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16,
        backgroundColor: useBackgroundColor(),
      }}>
      <ArtistList />
    </View>
  );
};

export default HomeScreen;
