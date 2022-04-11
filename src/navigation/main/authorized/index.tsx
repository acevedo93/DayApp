import React from 'react';

import {Stack} from '../constants';

//screens
import {HomeScreen} from '../../../screens/Home';

export const PrivateNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};
