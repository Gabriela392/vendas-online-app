import './main.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalProvider } from './shared/hooks/useGlobalContext';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalProvider>
      <App/>
    </GlobalProvider>
  </React.StrictMode>,
);