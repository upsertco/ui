import { Theme } from 'styled-system';

const breakpoints = ['40em', '52em', '64em', '80em'];

const colors = {
  white: '#FFFFFF',
  black: '#000000',
  grays: [
    '#191919',
    '#333333',
    '#4C4C4C',
    '#666666',
    '#7F7F7F',
    '#999999',
    '#B2B2B2',
    '#CCCCCC',
    '#E5E5E5',
  ],
  red: '#FB3640',
  orange: '#F2931E',
  yellow: '#F3B700',
  darkBlue: '#23445D',
  lightBlue: '#10739E',
};

const fontSizes = [12, 14, 16, 20, 24, 32, 48];

export const defaultTheme: Theme = {
  colors,
  breakpoints,
  fonts: {},
  fontSizes,
  mediaQueries: {
    sm: `@media screen and (min-width: ${breakpoints[0]})`,
    md: `@media screen and (min-width: ${breakpoints[1]})`,
    lg: `@media screen and (min-width: ${breakpoints[2]})`,
    xl: `@media screen and (min-width: ${breakpoints[3]})`,
  },
};
