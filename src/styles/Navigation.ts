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
    headerBackButton: {
      color: colorTheme.foreground,
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
