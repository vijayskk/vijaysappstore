import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ReloadContextProvider } from './contexts/RefreshContext';

ReactDOM.render(
  <React.StrictMode>
    <ReloadContextProvider>
      <App />
    </ReloadContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


