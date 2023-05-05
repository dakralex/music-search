import {Palette} from './Colors';
import {StyleSheet} from 'react-native';

export const getSearchStyles = (colorPalette: Palette) =>
  StyleSheet.create({
    searchBarContainer: {
      backgroundColor: colorPalette.foreground,
      marginVertical: 16,
      borderRadius: 6,
    },
  });
