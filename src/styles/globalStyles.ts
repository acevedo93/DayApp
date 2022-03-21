import { extendTheme } from '@chakra-ui/react';

const colors = {
  primary: {
    100: '#651FFF',
    200: '#4C17BF',
    300: '#331080',
  },
  secondary: {
    100: '#130F1C',
    200: '#56447F',
    300: '#8E82A9',
  },
  danger: {
    100: '#F34335',
    200: '#B63228',
    300: '#7A221B',
  },
  warning: {
    100: '#ffbb33',
    200: '#FF8800',
  },
  success: {
    100: '#00C851',
    200: '#007E33',
  },
  accent: {
    100: '#F6F4EE',
    200: '#EDE9DF',
    300: 'FFAB91',
  },
  neutral: {
    0: '#000000',
    10: '#1F1B29',
    25: '#2E2A36',
    50: '#616161',
    100: '#99969E',
    200: '#BAB9BD',
    300: '#DEDEE0',
    400: '#ECECEE',
    500: '#F3F3F5',
    600: '#FAFAFA',
  },
};

const theme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        bg: 'neutral.10',
        color: 'black',
      },
    },
  },
});
export const customTheme = extendTheme({ theme });
