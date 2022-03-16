import React from 'react';
import { Provider } from 'react-redux';
import { Navigation } from './navigation';
import { store } from './store';
import { GlobalStyles } from './styled-components/globalStyles';

import './App.css';
//css

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <Navigation />
    </Provider>
  );
}

export default App;
