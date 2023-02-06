import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { store } from '@/RTK/stores/store';
import { Provider } from 'react-redux';

import { worker } from '@/api/mocks/browser';

if (process.env.NODE_ENV === 'development') {
  worker.start();
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
