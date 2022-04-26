import React from 'react';

import {Stack} from '../constants';
import {colors} from '../../../styles/theme/colors';

//screens
import {HomeScreen} from '../../../screens/Home';
import {NewDayScreen} from '../../../screens/NewDay';

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
        options={{title: 'Today task'}}
        name="Home"
        component={HomeScreen}
      />

      <Stack.Screen
        options={{title: 'New Day'}}
        name="newDay"
        component={NewDayScreen}
      />
    </Stack.Navigator>
  );
};
