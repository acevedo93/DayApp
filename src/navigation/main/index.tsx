import React from 'react';
import {
  createNavigationContainerRef,
  NavigationContainer,
} from '@react-navigation/native';

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
    <NavigationContainer ref={navigationRef}>
      {!user ? <PublicNavigation /> : <PrivateNavigation />}
    </NavigationContainer>
  );
};

export const navigationRef = createNavigationContainerRef();

export function navigate(name: any, params: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}
