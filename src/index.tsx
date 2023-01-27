import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Reset SCSS
import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <App />
  </>
);
