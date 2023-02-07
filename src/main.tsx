import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { store } from '@/RTK/stores/store';
import { Provider } from 'react-redux';

import { worker } from '@/api/mocks/browser';

import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </Provider>,
  // </React.StrictMode>,
);
