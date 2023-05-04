import React from 'react';
import {View} from 'react-native';
import {RootState} from '../AppStore';
import {useSelector} from 'react-redux';
import {usePalette} from '../hooks/Colors';
import {getScreenStyles} from '../styles/Screens';
import ArtistList from '../components/organisms/ArtistList';

const HomeScreen = (): JSX.Element => {
  const colorPalette = usePalette();
  const screenStyles = getScreenStyles(colorPalette);

  const artists = useSelector(
    (state: RootState) => state.search.currentArtistResults,
  );

  return (
    <View style={screenStyles.screenViewContainer}>
      <ArtistList artists={artists} />
    </View>
  );
};

export default HomeScreen;
