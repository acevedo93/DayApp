import { Box, Text } from '@chakra-ui/react';
import { Task } from '../../../types/schedule';

interface Props {
  task: Task;
}
export const HalfHourBlock = ({ task }: Props) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="5"
      borderColor="neutral.200"
      width="100%"
      height="12"
      p="1"
    >
      <Text color="neutral.200">{task.title}</Text>
    </Box>
  );
};
