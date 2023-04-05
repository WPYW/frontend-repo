import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';

import { UploadModal as PromoteProjectUploadModal } from '@/components/organisms/PromoteProject';

import { store } from '@/stores/store';
import { Provider } from 'react-redux';

import { worker } from '@/api/mocks/browser';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

worker.start({ onUnhandledRequest: 'bypass' });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <App />
        <PromoteProjectUploadModal />
      </Router>
    </QueryClientProvider>
  </Provider>,
  // </React.StrictMode>,
);
