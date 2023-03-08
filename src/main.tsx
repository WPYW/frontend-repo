import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { PortalProjectModal } from '@/components/organisms';

import { store } from '@/RTK/stores/store';
import { Provider } from 'react-redux';

import { worker } from '@/api/mocks/browser';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

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
      </Router>
    </QueryClientProvider>
  </Provider>,
  // </React.StrictMode>,
);

ReactDOM.createRoot(document.getElementById('modal-root') as HTMLElement).render(
  // <React.StrictMode>
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <Router>
        <PortalProjectModal />
      </Router>
    </QueryClientProvider>
  </Provider>,
  // </React.StrictMode>,
);
