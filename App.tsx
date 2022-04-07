import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {MainNavigation} from './src/navigation/main';
import {theme} from './src/styles/theme';

export const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <MainNavigation />
    </NativeBaseProvider>
  );
};
