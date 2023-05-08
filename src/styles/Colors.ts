export type Palette = {
  [index: string]: string;
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
  gray: string;
};

export type ThemedPalette = {
  [index: string]: Palette;
  dark: Palette;
  light: Palette;
};

const Colors: ThemedPalette = {
  dark: {
    primary: '#FED18C',
    secondary: '#4392F1',
    background: '#161925',
    foreground: '#F3EFFA',
    gray: '#A6ADC9',
  },
  light: {
    primary: '#4392F1',
    secondary: '#FED18C',
    background: '#F3EFFA',
    foreground: '#161925',
    gray: '#454E73',
  },
};

export default Colors;
