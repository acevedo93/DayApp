import {colors} from './colors';

import {extendTheme} from 'native-base';

export const theme = extendTheme({
  colors,
  config: {
    initialColorMode: 'dark',
  },
});
