import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './shared/scss/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './components/App/App';

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
