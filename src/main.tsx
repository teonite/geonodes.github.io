import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './shared/scss/index.scss';
import { createRoot } from 'react-dom/client';
import { CrashCourse } from './components/CrashCourse/CrashCourse'
import { App } from './components/App/App';
import { THXCollection } from './components/THXCollection/THXCollection';
import { ThxPage } from './components/Thx/thx-page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThirdwebProvider } from "@thirdweb-dev/react";


createRoot(document.getElementById('root') as HTMLElement).render(
  <ThirdwebProvider activeChain="ethereum" clientId="65f2bd5bacbe75f9ea10b08db6a49aa0">
    <Router>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="/crashcourse" element={<CrashCourse />}/>
        <Route path="/collection" element={<THXCollection />}/>
        <Route path="/thx/:hash" element={<ThxPage />}/>
      </Routes>
    </Router>
  </ThirdwebProvider>
);


/**
 * @todo routing on hash
 * 
 * @backend /data returns all links and name with tokenId
 * /links returns only links
 * 
 * params.link after dynamic routingg will match with link at /data and display proper compnonents
 */