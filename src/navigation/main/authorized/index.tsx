import React from 'react';

import {Stack} from '../constants';
import {colors} from '../../../styles/theme/colors';

//screens
import {HomeScreen} from '../../../screens/Home';

export const PrivateNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.info['10'],
        },
        headerTintColor: 'white',
      }}>
      <Stack.Screen
        options={{title: 'New Day'}}
        name="Home"
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
