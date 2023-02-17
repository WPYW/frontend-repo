import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { store } from '@/RTK/stores/store';
import { Provider } from 'react-redux';

import { worker } from '@/api/mocks/browser';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { BrowserRouter as Router } from 'react-router-dom';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

const queryClient = new QueryClient();

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
