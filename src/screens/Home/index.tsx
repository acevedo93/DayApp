import {Button} from 'native-base';
import React from 'react';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slices/auth.slice';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Hola como estas</Text>
      <Button onPress={() => dispatch(logout())}>Log out</Button>
    </View>
  );
};
