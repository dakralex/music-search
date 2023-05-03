import {useColorScheme} from 'react-native';
import Colors from '../styles/Colors';

const useColorSchemeName = (): string => {
  return useColorScheme() === 'dark' ? 'dark' : 'light';
};

export const usePrimaryColor = (): string => {
  const colorSchemeName = useColorSchemeName();

  return Colors[colorSchemeName].primary;
};

export const useSecondaryColor = (): string => {
  const colorSchemeName = useColorSchemeName();

  return Colors[colorSchemeName].secondary;
};

export const useForegroundColor = (): string => {
  const colorSchemeName = useColorSchemeName();

  return Colors[colorSchemeName].foreground;
};

export const useBackgroundColor = (): string => {
  const colorSchemeName = useColorSchemeName();

  return Colors[colorSchemeName].background;
};
