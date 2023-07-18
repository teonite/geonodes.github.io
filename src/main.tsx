import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './shared/scss/index.scss';

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { CrashCourse } from './components/CrashCourse/CrashCourse'
import { App } from './components/App/App';
import { THXCollection } from './components/THXCollection/THXCollection';
import { ThxPage } from './components/Thx/thx-page';

/**
 * @toDo Make routing, for now, must comment and uncomment the pages
 */

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ThxPage name={'Berndt'} nodeId={3}/> */}
    {/* <CrashCourse /> */}
    <THXCollection />
  </StrictMode>
);
