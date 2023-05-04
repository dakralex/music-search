import {Palette} from './Colors';
import {StyleSheet} from 'react-native';

export const getScreenStyles = (colorTheme: Palette) =>
  StyleSheet.create({
    screenViewContainer: {
      flex: 1,
      paddingHorizontal: 16,
      backgroundColor: colorTheme.background,
    },
  });
