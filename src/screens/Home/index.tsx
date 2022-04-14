import React from 'react';
import {
  Box,
  VStack,
  Heading,
  Center,
  Checkbox,
  Button,
  Pressable,
  Text,
} from 'native-base';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/slices/auth.slice';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <Box background="info.10" flex="1" m>
      <Pressable onPress={() => console.log('pressable')}>
        <Center
          mt="10%"
          width="95%"
          rounded="lg"
          height="10%"
          background="info.25"
          alignItems="center"
          borderWidth="1"
          borderColor="info.300">
          <Heading color="info.200">Planear Nuevo dia</Heading>
        </Center>
      </Pressable>

      <Text fontSize="2xl">WED 23 MARZ</Text>
    </Box>
  );
};
