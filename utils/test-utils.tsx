// test-utils.js
import * as React from 'react';
import {render, RenderOptions} from '@testing-library/react-native';
import {Provider} from 'react-redux';
import {store} from '@/store/store';
import {ThemeProvider} from '@/theme/useTheme';

// Navigation
// import RootNavigation from '../routes/RootNavigation';

export const AllTheProviders = ({children}: {children: React.ReactNode}) => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        {children}
        {/* <RootNavigation /> */}
      </ThemeProvider>
    </Provider>
  );
};

const customRender = (ui: React.ReactElement, options: RenderOptions) =>
  render(ui, {wrapper: AllTheProviders, ...options});

// re-export everything
export * from '@testing-library/react-native';

// override render method
export {customRender as render};
