import {Button} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import {logout} from '../../services/firebase/auth';

export const HomeScreen = () => {
  return (
    <View>
      <Text>Hola como estas</Text>
      <Button onPress={logout}>Log out</Button>
    </View>
  );
};
