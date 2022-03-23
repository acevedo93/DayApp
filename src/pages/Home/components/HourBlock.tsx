import { Box, VStack, HStack, Text } from '@chakra-ui/react';
import { ScheduleBlock, Task } from '../../../types/schedule';
import { HalfHourBlock } from './HalfHourBlock';

interface Props {
  scheduleBlock: ScheduleBlock;
}

export const HourBlock = ({ scheduleBlock }: Props) => {
  return (
    <Box height="10%">
      <HStack>
        <Text alignSelf="start" color="neutral.200" fontWeight="bold">
          {scheduleBlock.hour}
        </Text>
        <VStack width="100%">
          {scheduleBlock.tasks.map((task) => {
            return <HalfHourBlock task={task} />;
          })}
        </VStack>
      </HStack>
    </Box>
  );
};
