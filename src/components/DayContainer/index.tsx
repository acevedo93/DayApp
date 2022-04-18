import React from 'react';
import {VStack, Text} from 'native-base';
import {BlockHour} from '../BlockHour';

export const DayContainer = () => {
  return (
    <VStack space="4">
      <Text mt="8" fontSize="2xl">
        WED 23 MAR
      </Text>
      <BlockHour hour="5:00" tasks={[]} />
      <BlockHour hour="5:00" tasks={[]} />
      <BlockHour hour="5:00" tasks={[]} />
    </VStack>
  );
};
