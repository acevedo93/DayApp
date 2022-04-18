import React from 'react';
import {HStack, Text, VStack} from 'native-base';
import {Task} from '../Task';

interface Props {
  hour: string;
  tasks: any[];
}
export const BlockHour = ({hour}: Props) => {
  return (
    <HStack>
      <Text flex="1" fontSize="lg" fontWeight="bold">
        {hour} am
      </Text>
      <VStack flex="3" space="2">
        <Task />
        <Task />
      </VStack>
    </HStack>
  );
};
