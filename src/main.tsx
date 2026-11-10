import './main.css';

import ReactDOM from 'react-dom/client';

import App from './App';
import { DataProvider } from './shared/hooks/DataProvider';
import { GlobalProvider } from './shared/hooks/useGlobalContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalProvider>
    <DataProvider>
      <App />
    </DataProvider>
  </GlobalProvider>,
);
