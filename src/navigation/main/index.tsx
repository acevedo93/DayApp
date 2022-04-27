import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

// routes
import {PublicNavigation} from './public';
import {PrivateNavigation} from './authorized';
import {useAuth} from '../../hooks/useAuth';
import {useCustomToast} from '../../hooks/useCustomToast';
import {CustomToast} from '../../components/CustomToast';

export const MainNavigation = () => {
  useCustomToast(CustomToast);

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
