import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// routes
import {PublicNavigation} from './auth/';
import {PrivateNavigation} from './authorized';
import {useAuth} from '../../hooks/useAuth';

export const MainNavigation = () => {
  const {user, initializing} = useAuth();

  if (initializing) {
    return null;
  }

  return (
    <NavigationContainer>
      {!user ? <PublicNavigation /> : <PrivateNavigation />}
    </NavigationContainer>
  );
};
