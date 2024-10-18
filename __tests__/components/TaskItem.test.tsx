import 'react-native';
import React from 'react';
import {jest, describe, it, expect} from '@jest/globals';
import {render, fireEvent, AllTheProviders} from '@/utils/test-utils';
import {TaskItem} from '@/components/TaskItem';
import renderer from 'react-test-renderer';

const mockdata = {
  id: "1",
  description: "Task"
};
const onPressDeleteMock = jest.fn();

describe('TaskItem render', () => {
    it(`renders correctly`, () => {
      const tree = renderer.create(
        <AllTheProviders>
          <TaskItem item={mockdata} onPressDelete={onPressDeleteMock} ></TaskItem>
        </AllTheProviders>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
});


