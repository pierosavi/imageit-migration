import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BaseStyles } from '@primer/components'
import AppHeader from './AppHeader';

ReactDOM.render(
  <React.StrictMode>
    <BaseStyles>
      <AppHeader />
      <App />
    </BaseStyles>
  </React.StrictMode>,
  document.getElementById('root')
);
