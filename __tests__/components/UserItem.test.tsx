import 'react-native';
import React from 'react';
import { describe, it } from '@jest/globals';
import renderer from 'react-test-renderer';
import { UserItem } from '@/components/UserItem';
import { ThemeProvider } from '@/theme/useTheme';

const mockdata = {
  "createdAt": "2021-10-22T12:13:22.338Z",
  "name": "Pauline Blanda",
  "avatar": "https://cdn.fakercloud.com/avatars/mkginfo_128.jpg",
  "id": 1
};

describe('UserItem render', () => {
  it(`renders correctly`, () => {
    const tree = renderer.create(
      <ThemeProvider>
        <UserItem item={mockdata}></UserItem>
      </ThemeProvider>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


