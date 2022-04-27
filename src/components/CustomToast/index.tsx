import React from 'react';
import {Box, Text} from 'native-base';
import {TypeToast} from '../../models';

interface Props {
  content: string;
  type?: TypeToast;
}

const COLOR_SUCCESS = 'success.200';
const COLOR_DANGER = 'error.300';

export const CustomToast = ({
  content,
  type = 'success',
}: Props): React.ReactNode => {
  return (
    <Box
      bg={type === 'success' ? COLOR_SUCCESS : COLOR_DANGER}
      px="2"
      py="1"
      rounded="sm"
      mb={5}>
      <Text>{content}</Text>
    </Box>
  );
};
