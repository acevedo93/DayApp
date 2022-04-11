import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// routes
import {PublicNavigation} from './auth/';
import {PrivateNavigation} from './authorized';
import {useAuth} from '../../hooks/useAuth';

export const MainNavigation = () => {
  const isAuth = useAuth();

  return (
    <NavigationContainer>
      {!isAuth ? <PublicNavigation /> : <PrivateNavigation />}
    </NavigationContainer>
  );
};
