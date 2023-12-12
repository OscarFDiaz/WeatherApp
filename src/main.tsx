import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';

import './styles/PigeoMapOverride.css';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        fontFamily: 'Poppins',
      }}
    >
      <Provider store={store}>
        <HashRouter>
          <Notifications />
          <App />
        </HashRouter>
      </Provider>
    </MantineProvider>
  </React.StrictMode>,
);
