import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './shared/scss/index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './components/App/App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
