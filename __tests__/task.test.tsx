import 'react-native';
import React from 'react';
import {describe, it, expect} from '@jest/globals';
import {AllTheProviders} from '@/utils/test-utils';
import renderer from 'react-test-renderer';
import { TasksScreen } from '@/screens/tasks';


describe('Task render test with configuration redux screen render', () => {
    it(`renders correctly`, () => {
      const tree = renderer.create(
        <AllTheProviders>
          <TasksScreen/>
        </AllTheProviders>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
});


