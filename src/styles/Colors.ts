type Palette = {
  [index: string]: string;
  primary: string;
  secondary: string;
  background: string;
  foreground: string;
};

type ThemedPalette = {
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
  },
  light: {
    primary: '#4392F1',
    secondary: '#FED18C',
    background: '#F3EFFA',
    foreground: '#161925',
  },
};

export default Colors;
