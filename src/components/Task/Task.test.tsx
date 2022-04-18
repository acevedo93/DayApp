import React from 'react';
import {render} from '@testing-library/react-native';
import {Task} from './';
import {NativeBaseProvider} from 'native-base';
describe('<Task />', () => {
  const {getByTestId} = render(
    <NativeBaseProvider>
      <Task />
    </NativeBaseProvider>,
  );

  test('Should be render task title', () => {
    const text = getByTestId('task-title');
    console.log(text);
    expect(text).toBeDefined();
  });
});
