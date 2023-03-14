import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';

import { Provider } from 'react-redux';
import { store } from '../src/stores/store';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

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
  mswDecorator,
  (story) => (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Router>{story()}</Router>
      </QueryClientProvider>
    </Provider>
  ),
];
