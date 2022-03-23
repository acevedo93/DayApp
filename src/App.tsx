import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './navigation';
import { store } from './store';

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './styles/globalStyles';

function App() {
  return (
    <Provider store={store}>
      <ChakraProvider resetCSS theme={customTheme}>
        <Navigation />
      </ChakraProvider>
    </Provider>
  );
}

export default App;
