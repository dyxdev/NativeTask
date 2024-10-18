import 'react-native';
import React from 'react';
import {describe, it, expect} from '@jest/globals';
import {AllTheProviders} from '@/utils/test-utils';
import renderer from 'react-test-renderer';
import { MockScreen } from '@/screens/mock';


describe('Mock screen,with configuration redux', () => {
    it(`renders correctly`, () => {
      const tree = renderer.create(
        <AllTheProviders>
          <MockScreen />
        </AllTheProviders>
      ).toJSON();
      expect(tree).toMatchSnapshot();
    });
});


