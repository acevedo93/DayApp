import React from 'react';

import {Input} from 'native-base';

interface Props {
  value: string;
  onChange: (val: string) => void;
}

export const CustomInput = ({value, onChange}: Props) => {
  return (
    <Input
      selectionColor="primary.200"
      selection
      onChangeText={onChange}
      value={value}
      width="100%"
      rounded="lg"
      height="60"
      background="info.25"
      alignItems="center"
      borderWidth="1"
      borderColor="info.300"
      borderStyle="dashed"
    />
  );
};
