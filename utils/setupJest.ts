import nock from 'nock';
import {NativeModules} from 'react-native';

nock.disableNetConnect();

NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(() => Promise.resolve()),
  addListener: jest.fn(),
  removeListeners: jest.fn(),
};

jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);