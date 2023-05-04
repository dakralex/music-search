import React from 'react';
import {View} from 'react-native';
import {usePalette} from '../../hooks/Colors';
import {getScreenStyles} from '../../styles/Screens';

type ScreenProps = {
  children?: JSX.Element | JSX.Element[];
};

const AppScreen = ({children}: ScreenProps): JSX.Element => {
  const colorPalette = usePalette();
  const screenStyles = getScreenStyles(colorPalette);

  return <View style={screenStyles.screenViewContainer}>{children}</View>;
};

export default AppScreen;
