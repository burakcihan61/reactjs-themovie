import React from 'react';
import ReactDOM from 'react-dom/client';
import Containers from './Containers';

// Reset SCSS
import './styles/reset.scss';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <Containers />
  </>
);
