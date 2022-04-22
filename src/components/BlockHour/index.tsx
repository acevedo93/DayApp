import React from 'react';
import {HStack, Text, VStack} from 'native-base';
import {Task} from '../Task';
import {DayData} from '../../models/index';

interface Props {
  data: DayData;
}

export const BlockHour = ({data}: Props) => {
  return (
    <HStack marginBottom="4">
      <Text flex="1" fontSize="lg" fontWeight="bold">
        {data.hour}
      </Text>
      <VStack flex="3" space="2">
        <Task task={data.tasks[0]} />
        <Task task={data.tasks[1]} />
      </VStack>
    </HStack>
  );
};
