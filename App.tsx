import {NativeBaseProvider} from 'native-base';
import React from 'react';
import {MainNavigation} from './src/navigation/main';
import {theme} from './src/styles/theme';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

export const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <MainNavigation />
      </NativeBaseProvider>
    </Provider>
  );
};
