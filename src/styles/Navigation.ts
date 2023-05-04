import {Palette} from './Colors';
import {StyleSheet} from 'react-native';

export const getNavigationStyles = (colorTheme: Palette) =>
  StyleSheet.create({
    headerContainer: {
      backgroundColor: colorTheme.background,
    },
    headerText: {
      color: colorTheme.primary,
      fontSize: 24,
    },
    tabBarContainer: {
      backgroundColor: colorTheme.background,
    },
    tabBarText: {
      color: colorTheme.foreground,
    },
    tabBarTextActive: {
      color: colorTheme.primary,
    },
  });
