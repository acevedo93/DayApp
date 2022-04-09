import React from 'react';

import {Stack} from '../constants';

//screens

import {LoginScreen} from '../../../screens/Login/Login';

export const PublicNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
