import {useColorScheme} from 'react-native';
import Colors, {Palette} from '../styles/Colors';

const useColorSchemeName = (): string => {
  return useColorScheme() === 'dark' ? 'dark' : 'light';
};

export const usePalette = (): Palette => {
  const colorSchemeName = useColorSchemeName();

  return Colors[colorSchemeName];
};

export const usePrimaryColor = (): string => {
  return usePalette().primary;
};

export const useSecondaryColor = (): string => {
  return usePalette().secondary;
};

export const useForegroundColor = (): string => {
  return usePalette().foreground;
};

export const useBackgroundColor = (): string => {
  return usePalette().background;
};
