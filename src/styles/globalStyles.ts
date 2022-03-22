import { extendTheme } from '@chakra-ui/react';
import { colors } from './colors';
import { fonts } from './fonts';
const theme = {
  colors,
  fonts,
  styles: {
    global: {
      body: {
        bg: 'neutral.10',
        color: 'black',
      },
    },
  },
};
export const customTheme = extendTheme(theme);
