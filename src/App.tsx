import React from 'react';
import './App.css';

import { signInWithAuthProvider } from './services/firebase/auth';
import { Navigation } from './navigation';

function App() {
  return <Navigation />;
}

export default App;
