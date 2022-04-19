import React from 'react';
import {render, RenderAPI} from '@testing-library/react-native';
import {Task} from './';
import {NativeBaseProvider} from 'native-base';

let component: RenderAPI;
describe('<Task />', () => {
  beforeEach(() => {
    component = render(
      <NativeBaseProvider>
        <Task />
      </NativeBaseProvider>,
    );
  });

  it('Should be render task title', () => {
    const text = component.queryByTestId('task-title');
    expect(text).toBeDefined();
  });
});
