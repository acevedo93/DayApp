import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './navigation';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from './styles/globalStyles';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider resetCSS theme={customTheme}>
          <Navigation />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
