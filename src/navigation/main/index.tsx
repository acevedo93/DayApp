import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from './auth';
import {PublicNavigation} from './auth/index.tsx';
import {PrivateNavigation} from './authorized/index.tsx';
export const MainNavigation = () => {
  const auth = true;
  return (
    <NavigationContainer>
      {auth && <PrivateNavigation />}
      {!auth && <PublicNavigation />}
    </NavigationContainer>
  );
};
