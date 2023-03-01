import React from 'react';
import './index.css';

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
  (story) => <QueryClientProvider client={queryClient}>{story()}</QueryClientProvider>,
];
