import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

import { AlertProvider } from './context/AlertContext';
import { ThemeProvider } from './context/ThemeContext';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <AlertProvider>
        <App />
      </AlertProvider>
    </ThemeProvider>
  </React.StrictMode>
);
