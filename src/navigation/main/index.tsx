import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from './auth';

export const MainNavigation = () => {
  return (
    <NavigationContainer>
      <AuthNavigation />
    </NavigationContainer>
  );
};
