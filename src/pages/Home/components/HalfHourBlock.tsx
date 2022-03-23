import { Box, HStack, Text } from '@chakra-ui/react';
import { Task } from '../../../types/schedule';

interface Props {
  task: Task;
}
export const HalfHourBlock = ({ task }: Props) => {
  const checkTaskStatusStyle = () => {
    if (task.state === 'success') {
      return 'success.100';
    }
    if (task.state === 'pending') {
      return 'danger.100';
    }
    if (task.state === 'progress') {
      return 'warning.100';
    }
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="5"
      borderColor={checkTaskStatusStyle()}
      width="100%"
      height="12"
      p="1"
    >
      <HStack alignItems="center">
        <Text fontWeight="bold" color="neutral.200">
          {task.title} :
        </Text>
        <Text color="neutral.200">{task.description}</Text>
      </HStack>
    </Box>
  );
};
