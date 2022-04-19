import React from 'react';
import {VStack, Text} from 'native-base';
import {BlockHour} from '../BlockHour';

const DATA_TEST = [
  {
    date: '3/25/2022',
    hour: '6:00 am',
    state: 'progress',
    tasks: [
      {
        block: '1',
        description: ' Terminar React js',
        state: 'success',
        title: 'react',
        type: 'work',
      },

      {
        block: '2',
        description: 'Estudiar angular ',
        state: 'pending',
        title: 'angular',
        type: 'work',
      },
    ],
  },
];

export const DayContainer = () => {
  return (
    <VStack space="4">
      <Text mt="8" fontSize="2xl">
        WED 23 MAR
      </Text>
      {DATA_TEST.map(blockHour => {
        return <BlockHour data={blockHour} />;
      })}
    </VStack>
  );
};
