import React from 'react';
import './index.css';

import { Provider } from 'react-redux';
import { store } from '../src/RTK/stores/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export const decorators = [
  (story) => (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>
    </Provider>
  ),
];
