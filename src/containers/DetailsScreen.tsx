import React from 'react';
import {View} from 'react-native';
import {usePalette} from '../hooks/Colors';
import {getScreenStyles} from '../styles/Screens';

const DetailsScreen = (): JSX.Element => {
  const colorPalette = usePalette();
  const screenStyles = getScreenStyles(colorPalette);

  return <View style={screenStyles.screenViewContainer}></View>;
};

export default DetailsScreen;
