import React from 'react';
import {Box, Heading, Center, Pressable} from 'native-base';
import {DayContainer} from '../../components/DayContainer';

export const HomeScreen = () => {
  return (
    <Box background="info.10" flex="1" px="4">
      <Pressable onPress={() => console.log('pressable')}>
        <Center
          mt="10%"
          width="100%"
          rounded="lg"
          height="60"
          background="info.25"
          alignItems="center"
          borderWidth="1"
          borderColor="info.300"
          borderStyle="dashed">
          <Heading color="info.200">Planear Nuevo dia</Heading>
        </Center>

        <DayContainer />
      </Pressable>
    </Box>
  );
};
