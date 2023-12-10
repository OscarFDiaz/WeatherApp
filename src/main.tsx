import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import './index.css';

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import '@mantine/notifications/styles.css';
import './styles/PigeoMapOverride.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider
      defaultColorScheme="dark"
      theme={{
        fontFamily: 'Poppins',
        primaryColor: 'blue',
      }}
    >
      <Notifications />
      <App />
    </MantineProvider>
  </React.StrictMode>,
);